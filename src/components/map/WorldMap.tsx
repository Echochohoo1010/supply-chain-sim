import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from 'react-leaflet';
import type { FeatureCollection } from 'geojson';
import { Layer, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CountryProperties } from '../../types/country';

interface WorldMapProps {
  onCountrySelect?: (countryCode: string, countryName: string) => void;
  selectedCountryCode?: string | null;
}

const WorldMap: React.FC<WorldMapProps> = ({ onCountrySelect, selectedCountryCode }) => {
  const [wrappedGeoData, setWrappedGeoData] = useState<FeatureCollection | null>(null);

  useEffect(() => {
    fetch('/src/data/countries.geo.json')
      .then(response => response.json())
      .then(data => {
        // Create wrapped versions of the GeoJSON for seamless horizontal scrolling
        const wrappedData = createWrappedGeoJSON(data);
        setWrappedGeoData(wrappedData);
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  }, []);

  // Function to duplicate GeoJSON features with longitude offsets for seamless wrapping
  const createWrappedGeoJSON = (originalData: any): FeatureCollection => {
    const features = originalData.features;
    const wrappedFeatures = [];

    // Create three copies: -360°, 0° (original), +360°
    const offsets = [-360, 0, 360];

    offsets.forEach(offset => {
      features.forEach((feature: any) => {
        const clonedFeature = JSON.parse(JSON.stringify(feature));

        // Offset all coordinates
        if (clonedFeature.geometry.type === 'Polygon') {
          clonedFeature.geometry.coordinates = clonedFeature.geometry.coordinates.map((ring: any) =>
            ring.map((coord: any) => [coord[0] + offset, coord[1]])
          );
        } else if (clonedFeature.geometry.type === 'MultiPolygon') {
          clonedFeature.geometry.coordinates = clonedFeature.geometry.coordinates.map((polygon: any) =>
            polygon.map((ring: any) =>
              ring.map((coord: any) => [coord[0] + offset, coord[1]])
            )
          );
        }

        wrappedFeatures.push(clonedFeature);
      });
    });

    return {
      type: 'FeatureCollection',
      features: wrappedFeatures
    };
  };

  const getCountryStyle = (feature: any) => {
    const countryCode = feature.properties.ISO_A2;
    const isSelected = countryCode === selectedCountryCode;

    return {
      fillColor: isSelected ? '#ffffff' : '#0a0a0a',
      fillOpacity: isSelected ? 0.9 : 0.4,
      color: isSelected ? '#ffffff' : '#1a1a1a',
      weight: isSelected ? 2 : 0.3,
      opacity: isSelected ? 1 : 0.6,
    };
  };

  const highlightFeature = (e: LeafletMouseEvent) => {
    const layer = e.target;
    const countryCode = layer.feature.properties.ISO_A2;

    if (countryCode !== selectedCountryCode) {
      layer.setStyle({
        fillOpacity: 0.7,
        weight: 1,
        color: '#404040',
        fillColor: '#1a1a1a',
      });
    }
  };

  const resetHighlight = (e: LeafletMouseEvent) => {
    const layer = e.target;
    const countryCode = layer.feature.properties.ISO_A2;

    if (countryCode !== selectedCountryCode) {
      layer.setStyle(getCountryStyle(layer.feature));
    }
  };

  const onCountryClick = (e: LeafletMouseEvent) => {
    const layer = e.target;
    const properties = layer.feature.properties as CountryProperties;
    const countryCode = properties.ISO_A2;
    const countryName = properties.NAME || properties.ADMIN;

    if (onCountrySelect) {
      onCountrySelect(countryCode, countryName);
    }
  };

  const onEachFeature = (feature: any, layer: Layer) => {
    const properties = feature.properties as CountryProperties;
    const countryName = properties.NAME || properties.ADMIN;

    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: onCountryClick,
    });

    // Bind tooltip for hover
    layer.bindTooltip(countryName, {
      permanent: false,
      direction: 'top',
      className: 'country-tooltip',
    });
  };

  if (!wrappedGeoData) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-900 text-white">
        <div className="text-xl">Loading map data...</div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={6}
        style={{ height: '100%', width: '100%', background: '#000000' }}
        zoomControl={false}
        worldCopyJump={true}
        maxBounds={[[-85, -180], [85, 180]]}
        maxBoundsViscosity={0.8}
        scrollWheelZoom={true}
        wheelDebounceTime={100}
        wheelPxPerZoomLevel={120}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          noWrap={false}
        />
        <GeoJSON
          data={wrappedGeoData}
          style={getCountryStyle}
          onEachFeature={onEachFeature}
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
