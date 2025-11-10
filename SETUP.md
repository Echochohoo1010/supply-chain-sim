# Quick Setup Guide - Interactive World Map

## What You Just Built

An interactive world map application with:
- **195+ countries** with clickable selection
- **Zoom & Pan controls** for navigation
- **Country information panel** showing selected countries
- **Dark professional theme** matching your brand
- **Hover tooltips** for quick country identification
- **Backend API structure** ready for data integration

## Current Status

✅ **Frontend is running** at http://localhost:3000
✅ **Demo page** available at http://localhost:3000/#/demo
✅ **All dependencies installed**
✅ **GeoJSON data loaded** (~195 countries)
✅ **Backend structure created** (not running yet)

## How to Use the Map

1. **Navigate to the demo page**: http://localhost:3000/#/demo
2. **Click on any country** to select it (will highlight in cyan)
3. **Click again** to deselect
4. **Scroll** to zoom in/out
5. **Drag** to pan around the map
6. **Hover** over countries to see their names
7. **Use the "Clear Selection" button** to reset

## Key Components Created

### Frontend Components
```
src/components/map/
├── WorldMap.tsx      - Main interactive map with Leaflet
├── CountryInfo.tsx   - Right sidebar showing country details
└── MapControls.tsx   - Left sidebar with controls and legend
```

### Data & Types
```
src/data/countries.geo.json  - GeoJSON with all country boundaries
src/types/country.ts         - TypeScript interfaces
src/styles/map.css           - Custom Leaflet styling
```

### Backend (Ready for Future)
```
backend/
├── server.js           - Express API server
├── data/countries.json - Country data storage
└── package.json        - Backend dependencies
```

## Next Steps

### To Start Using:
1. The map is **already running** - just navigate to http://localhost:3000/#/demo
2. Start clicking countries to test the selection feature
3. Try zooming and panning

### To Start the Backend API (Optional):
```bash
cd backend
npm install
npm start
```
Backend will run on http://localhost:3001

### API Endpoints Available:
- `GET /api/countries` - List all countries
- `GET /api/countries/:code` - Get specific country
- `GET /api/supply-chain/flows` - Get supply chain data
- `POST /api/supply-chain/flows` - Add new flow data

## Future Development

### Phase 1: Supply Chain Flows
Add connections between countries showing:
- Trade routes (arrows/lines)
- Volume metrics
- Directional flows

To implement:
1. Update `backend/data/countries.json` with flow data
2. Modify `WorldMap.tsx` to render flow lines
3. Add flow filtering controls

### Phase 2: Data Integration
- Connect frontend to backend API
- Replace JSON file with database (PostgreSQL/MongoDB)
- Add real-time data updates

### Phase 3: Advanced Features
- Search functionality
- Export selected data
- Historical data visualization
- Analytics dashboard

## Customization

### Change Colors
Edit [src/components/map/WorldMap.tsx](src/components/map/WorldMap.tsx):
```typescript
// Line 32 - Change selection color
fillColor: isSelected ? '#3498db' : '#2c3e50',
```

### Add More Country Data
Edit [backend/data/countries.json](backend/data/countries.json):
```json
{
  "countryCode": "US",
  "name": "United States",
  "selected": false,
  "connections": ["CN", "MX", "CA"],
  "customData": {
    "gdp": 25000000000000,
    "population": 331900000
  }
}
```

### Modify Map Settings
Edit [src/components/map/WorldMap.tsx](src/components/map/WorldMap.tsx):
```typescript
// Line 108 - Change initial view
center={[20, 0]}    // [latitude, longitude]
zoom={2}            // 1-6 (1=world, 6=close)
minZoom={1}
maxZoom={6}
```

## Files Modified/Created

### Modified:
- `src/pages/DemoPage.tsx` - Replaced with interactive map
- `src/main.tsx` - Added CSS import
- `package.json` - Added Leaflet dependencies

### Created:
- `src/components/map/WorldMap.tsx`
- `src/components/map/CountryInfo.tsx`
- `src/components/map/MapControls.tsx`
- `src/types/country.ts`
- `src/data/countries.geo.json`
- `src/styles/map.css`
- `backend/server.js`
- `backend/package.json`
- `backend/data/countries.json`
- `README_MAP.md`

## Troubleshooting

### Map not showing?
- Check browser console for errors
- Verify you're on http://localhost:3000/#/demo
- Refresh the page (Ctrl/Cmd + R)

### Can't click countries?
- Make sure the GeoJSON loaded (check browser console)
- Try clicking in the center of a large country first

### Need to restart the server?
- Press Ctrl+C in the terminal
- Run `npm run dev` again

## Resources

- Full documentation: `README_MAP.md`
- Leaflet docs: https://leafletjs.com/
- React-Leaflet: https://react-leaflet.js.org/

---

**You're all set! Visit http://localhost:3000/#/demo to see your interactive map!**
