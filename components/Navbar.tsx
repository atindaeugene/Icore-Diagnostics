
import React, { useState } from 'react';
import { Menu, X, MapPin, ChevronDown } from 'lucide-react';
import { BranchId, BranchInfo } from '../types';
import { BRANCHES } from '../constants';

interface NavbarProps {
  currentBranch: BranchInfo;
  onBranchChange: (id: BranchId) => void;
}

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M50 5C35 5 25 15 25 30C25 45 35 55 50 55C65 55 75 45 75 30C75 15 65 5 50 5Z" fill="#22c55e" />
    <path d="M50 95C65 95 75 85 75 70C75 55 65 45 50 45C35 45 25 55 25 70C25 85 35 95 50 95Z" fill="#1d4ed8" />
    <path d="M5 50C5 35 15 25 30 25C45 25 55 35 55 50C55 65 45 75 30 75C15 75 5 65 5 50Z" fill="#15803d" />
    <path d="M95 50C95 65 85 75 70 75C55 75 45 65 45 50C45 35 55 25 70 25C85 25 95 35 95 50Z" fill="#3b82f6" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ currentBranch, onBranchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Test Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <Logo />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold brand-font text-slate-800 tracking-tight leading-none">
                  Icore
                </span>
                <span className="text-xl md:text-2xl font-bold brand-font text-blue-800 tracking-tight leading-none">
                  Diagnostics
                </span>
              </div>
            </div>
            
            <div className="hidden md:ml-8 md:flex md:items-center">
              <div className="relative">
                <button 
                  onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <MapPin size={16} className="text-blue-600" />
                  {currentBranch.name}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isBranchDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isBranchDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {Object.values(BRANCHES).map((branch) => (
                      <button
                        key={branch.id}
                        onClick={() => {
                          onBranchChange(branch.id);
                          setIsBranchDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition-colors ${currentBranch.id === branch.id ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-600'}`}
                      >
                        <div className="font-semibold">{branch.name}</div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-1">{branch.address}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#results"
              className="bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-slate-100">
            <div className="px-5 font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Selected Branch</div>
            {Object.values(BRANCHES).map((branch) => (
              <button
                key={branch.id}
                onClick={() => {
                  onBranchChange(branch.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-5 py-3 flex items-center justify-between ${currentBranch.id === branch.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600'}`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{branch.name}</span>
                  <span className="text-xs opacity-75">{branch.address}</span>
                </div>
                {currentBranch.id === branch.id && <MapPin size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
