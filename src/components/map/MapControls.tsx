import React from 'react';

interface MapControlsProps {
  onClearSelection?: () => void;
  selectedCount: number;
}

const MapControls: React.FC<MapControlsProps> = ({ onClearSelection, selectedCount }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-lg">
      <h3 className="text-sm font-semibold text-white mb-3">Map Controls</h3>

      <div className="space-y-2">
        <button
          onClick={onClearSelection}
          disabled={selectedCount === 0}
          className={`w-full px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
            selectedCount === 0
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          Clear Selection ({selectedCount})
        </button>

        <div className="pt-3 border-t border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Legend</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-slate-600 bg-slate-700"></div>
              <span className="text-xs text-slate-300">Default</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-cyan-600 bg-cyan-500"></div>
              <span className="text-xs text-slate-300">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-teal-600 bg-slate-700"></div>
              <span className="text-xs text-slate-300">Hover</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-700">
          <p className="text-xs text-slate-400 mb-1">Instructions</p>
          <ul className="text-xs text-slate-500 space-y-1">
            <li>• Click to select countries</li>
            <li>• Scroll to zoom in/out</li>
            <li>• Drag to pan the map</li>
            <li>• Hover for country names</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapControls;
