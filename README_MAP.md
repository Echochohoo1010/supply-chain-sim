# Interactive World Map - Cascade Intelligence

An interactive world map application for visualizing supply chain intelligence and country-level data.

## Features

### Current Implementation ✅
- **Interactive World Map**: Canvas displaying all ~195 countries with borders
- **Country Selection**: Click to select/deselect countries with visual highlighting
- **Zoom & Pan Controls**: Scroll to zoom, drag to pan, dedicated zoom buttons
- **Country Information Panel**: Display selected country name and code
- **Hover Tooltips**: Show country names on hover
- **Responsive Layout**: Full-screen map with side panels for controls and info
- **Dark Theme**: Professional dark UI matching Cascade Intelligence branding

### User Interactions
- **Click**: Select/deselect countries
- **Scroll**: Zoom in/out
- **Drag**: Pan around the map
- **Hover**: Display country name tooltip

### Visual Design
- Clean, minimal dark interface
- Selected countries: Highlighted with cyan color (#3498db) and thicker border
- Default state: Subtle dark borders with neutral colors
- Hover state: Teal highlight for better UX

## Technical Stack

### Frontend
- **React 19.2.0** with TypeScript
- **Vite 6.2.0** for fast development
- **Leaflet 1.9.4** for map rendering
- **React-Leaflet 5.0.0** for React integration
- **React Router DOM** for navigation
- **Tailwind CSS** for styling

### Data Source
- **Natural Earth Data**: 110m resolution GeoJSON (simplified for performance)
- Country boundaries with properties (ISO codes, names, population, etc.)

### Backend (Prepared Structure)
- **Node.js + Express** API server
- RESTful endpoints for country data
- JSON file-based storage (ready for database integration)

## Project Structure

```
Cascade Intelligence/
├── src/
│   ├── components/
│   │   ├── map/
│   │   │   ├── WorldMap.tsx         # Main map component with Leaflet
│   │   │   ├── CountryInfo.tsx      # Country details panel
│   │   │   └── MapControls.tsx      # Control panel with legend
│   │   └── ui/                      # Reusable UI components
│   ├── pages/
│   │   ├── DemoPage.tsx             # Main map page
│   │   └── LandingPage.tsx          # Homepage
│   ├── types/
│   │   └── country.ts               # TypeScript interfaces
│   ├── data/
│   │   └── countries.geo.json       # GeoJSON country boundaries
│   ├── styles/
│   │   └── map.css                  # Custom map styling
│   └── App.tsx                      # Main app with routing
│
├── backend/
│   ├── server.js                    # Express API server
│   ├── routes/                      # API route handlers
│   ├── controllers/                 # Business logic
│   ├── data/
│   │   └── countries.json           # Country data store
│   └── package.json
│
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 10+

### Installation

1. **Install frontend dependencies**:
   ```bash
   npm install
   ```

2. **Start the frontend development server**:
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:3000

3. **Install backend dependencies** (optional, for API):
   ```bash
   cd backend
   npm install
   ```

4. **Start the backend server** (optional):
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```
   API will run on http://localhost:3001

### Development

- **Frontend**: http://localhost:3000
- **Demo Page**: http://localhost:3000/#/demo
- **Backend API**: http://localhost:3001 (when running)

## Data Structure

### Country Data Model
```typescript
interface Country {
  countryCode: string;      // ISO 2-letter code (e.g., "US")
  name: string;             // Country name
  selected: boolean;        // Selection state
}
```

### Future: Supply Chain Flow Data
```typescript
interface SupplyChainFlow {
  sourceCountry: string;    // Origin country code
  targetCountry: string;    // Destination country code
  volume?: number;          // Trade volume
  value?: number;           // Monetary value
  type?: string;            // Flow type (e.g., "goods", "services")
}
```

## API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/countries` | Get all countries |
| GET | `/api/countries/:code` | Get country by ISO code |
| GET | `/api/supply-chain/flows` | Get all supply chain flows |
| POST | `/api/supply-chain/flows` | Create new supply chain flow |
| GET | `/health` | Health check |

## Performance Considerations

- **Lightweight GeoJSON**: Using 110m resolution (simplified boundaries)
- **Client-side rendering**: ~195 countries rendered efficiently
- **Concurrent users**: Designed for ~5 concurrent users
- **Periodic updates**: Data updates are not real-time (suitable for dashboards)
- **Optimized assets**: Vite handles code splitting and optimization

## Future Enhancements

### Phase 1: Supply Chain Visualization
- [ ] Flow connections between countries (arrows/lines)
- [ ] Volume/value metrics display
- [ ] Directional flow indicators
- [ ] Flow filtering and search

### Phase 2: Data Integration
- [ ] Connect to real backend database
- [ ] Real-time or periodic data updates
- [ ] Data import/export functionality
- [ ] Historical data visualization

### Phase 3: Advanced Features
- [ ] Multiple selection modes (single, multiple, region)
- [ ] Country grouping and regions
- [ ] Search functionality for countries
- [ ] Export selected data (CSV, JSON)
- [ ] Customizable color schemes
- [ ] Animation for flows

### Phase 4: Analytics
- [ ] Supply chain analytics dashboard
- [ ] Trade pattern analysis
- [ ] Risk assessment visualization
- [ ] Predictive modeling integration

## Customization

### Changing Map Styles
Edit [src/components/map/WorldMap.tsx](src/components/map/WorldMap.tsx:32):
```typescript
const getCountryStyle = (feature: any) => {
  return {
    fillColor: '#your-color',
    fillOpacity: 0.7,
    color: '#border-color',
    weight: 2,
  };
};
```

### Modifying Colors
Update the style values in [src/components/map/WorldMap.tsx](src/components/map/WorldMap.tsx:32) and [src/styles/map.css](src/styles/map.css)

## Troubleshooting

### Map not loading
- Check that `countries.geo.json` exists in `src/data/`
- Verify Leaflet CSS is imported
- Check browser console for errors

### Countries not clickable
- Ensure GeoJSON features have valid `properties.ISO_A2` codes
- Check that event handlers are properly attached

### Styling issues
- Verify Tailwind CSS is configured
- Check that `map.css` is imported in `main.tsx`

## Resources

- [Leaflet Documentation](https://leafletjs.com/)
- [React-Leaflet](https://react-leaflet.js.org/)
- [Natural Earth Data](https://www.naturalearthdata.com/)
- [GeoJSON Specification](https://geojson.org/)

## License

[Your License Here]

## Contributing

[Your contribution guidelines here]

---

Built with ❤️ for supply chain intelligence
