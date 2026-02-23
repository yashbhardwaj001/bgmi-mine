import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Gamepad2 className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Battle<span className="text-primary">Zone</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className={`transition-colors px-3 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors px-3 py-2 text-sm font-medium ${location.pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                About
              </Link>
              <a
                href="/login.html"
                className="bg-white text-bg-dark hover:bg-gray-100 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-card border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              className={`block px-3 py-3 rounded-lg text-base font-medium ${location.pathname === '/' ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-3 rounded-lg text-base font-medium ${location.pathname === '/about' ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              About
            </Link>
            <a
              href="/login.html"
              className="block w-full mt-4 bg-white text-bg-dark px-3 py-3 rounded-lg text-base font-semibold text-center"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
