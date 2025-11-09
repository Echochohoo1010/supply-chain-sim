import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-6 px-6 lg:px-12 border-b border-gray-900">
      <div className="w-full flex items-center justify-between">
          <Link to="/" className="text-lg font-normal text-white hover:opacity-80 transition-opacity font-serif">
            <span>Cascade Intelligence</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">About</Link>
            <Button onClick={() => navigate('/demo')} variant="primary">
              Try Demo
            </Button>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
    </header>
  );
};

export default Header;
