import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorldMap from '../components/map/WorldMap';
import CountryInfo from '../components/map/CountryInfo';

const DemoPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<{ code: string; name: string } | null>(null);

  const handleCountrySelect = (countryCode: string, countryName: string) => {
    // Single selection: if same country is clicked, deselect it
    if (selectedCountry?.code === countryCode) {
      setSelectedCountry(null);
    } else {
      // Otherwise, select the new country
      setSelectedCountry({ code: countryCode, name: countryName });
    }
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Floating Back to Home Button - Top Left */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-[1000] px-5 py-3 rounded-lg font-medium text-sm bg-black/90 backdrop-blur-sm text-white hover:bg-slate-900/90 transition-all duration-200 shadow-lg border border-slate-800/80 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      {/* Full Screen Map */}
      <main className="absolute inset-0">
        <WorldMap
          onCountrySelect={handleCountrySelect}
          selectedCountryCode={selectedCountry?.code || null}
        />
      </main>

      {/* Right Sidebar - Country Info (Floating) - Only show when country is selected */}
      {selectedCountry && (
        <aside className="absolute top-6 right-6 w-80 z-[1000] max-h-[calc(100vh-3rem)] animate-fadeIn">
          <CountryInfo
            selectedCountry={selectedCountry}
            selectedCount={1}
          />
        </aside>
      )}
    </div>
  );
};

export default DemoPage;
