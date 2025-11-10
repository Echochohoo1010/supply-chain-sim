
import React from 'react';
import { Link } from 'react-router-dom';
import { NetworkIcon } from '../utils/constants';

const DemoPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-center px-4">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white hover:opacity-80 transition-opacity mb-8">
            <NetworkIcon className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl">Cascade Intelligence</span>
        </Link>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Demo Coming Soon</h1>
      <p className="mt-4 text-lg text-slate-400 max-w-md">
        We are putting the final touches on our interactive platform. Check back soon to explore the future of supply chain intelligence.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-md font-semibold text-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default DemoPage;
