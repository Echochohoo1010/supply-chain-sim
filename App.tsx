import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <div className="bg-black text-slate-300 min-h-screen font-sans">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;