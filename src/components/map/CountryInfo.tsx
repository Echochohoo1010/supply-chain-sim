import React from 'react';

interface CountryInfoProps {
  selectedCountry: {
    code: string;
    name: string;
  } | null;
  selectedCount: number;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ selectedCountry }) => {
  if (!selectedCountry) return null;

  return (
    <div className="bg-black/95 backdrop-blur-sm border border-slate-800/80 rounded-lg p-6 shadow-2xl">
      <h2 className="text-xl font-bold text-white mb-4">Country Information</h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-slate-400 mb-1">Country Name</p>
          <p className="text-xl font-semibold text-white">{selectedCountry.name}</p>
        </div>

        <div className="pt-3 border-t border-slate-800/80">
          <p className="text-sm text-slate-400 mb-1">Country Code</p>
          <p className="text-lg font-mono text-slate-300">{selectedCountry.code}</p>
        </div>

        <div className="pt-4 border-t border-slate-800/80">
          <p className="text-xs text-slate-500">
            Click the same country again to deselect
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
