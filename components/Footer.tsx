import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0D1A3D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-serif max-w-2xl text-white">
              Ready to transform your supply chain with Cascade Intelligence?
            </h2>
            <div className="flex-shrink-0">
              <Button onClick={() => navigate('/demo')}>Try Demo</Button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-300">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold font-serif text-white">Cascade</h3>
            <p className="mt-4 text-sm leading-6 max-w-xs">
              Empowering resilient supply chains through rare earth intelligence and proactive solutions.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">About</Link></li>
              <li><Link to="/" className="hover:text-white">Blog</Link></li>
              <li><Link to="/" className="hover:text-white">Careers</Link></li>
              <li><Link to="/" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Global HQ: New York, NY.</li>
              <li>Satellite offices worldwide.</li>
              <li className="pt-2"><a href="tel:+1-212-555-0123" className="hover:text-white">+1-212-555-0123</a></li>
              <li><a href="mailto:info@cascadeintel.com" className="hover:text-white">info@cascadeintel.com</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Whitepapers</Link></li>
              <li><Link to="/" className="hover:text-white">Reports</Link></li>
              <li><Link to="/" className="hover:text-white">API</Link></li>
              <li><Link to="/" className="hover:text-white">Webinars</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;