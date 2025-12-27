
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Globe } from 'lucide-react';
import { BranchInfo } from '../types';

interface FooterProps {
  currentBranch: BranchInfo;
}

const Footer: React.FC<FooterProps> = ({ currentBranch }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Globe size={24} />
              </div>
              <span className="text-2xl font-bold brand-font tracking-tight">ICORE.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing accessible, reliable and affordable ultrasound services in Athi River and Kitengela.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-200">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Obstetric Ultrasound</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Pelvic Ultrasound</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Abdominal Scan</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">KUB/Renal Scan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-200">Locations</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <div className="font-semibold text-slate-200">Kitengela Town</div>
                <div className="text-xs mt-1">Oserian House 1st Flr, Mirriams Rd</div>
                <div className="text-xs opacity-60">Daily: 8am - 8pm</div>
              </li>
              <li>
                <div className="font-semibold text-slate-200">Greatwall Gardens</div>
                <div className="text-xs mt-1">Edon Business Center</div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-200">Contact Info</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <span>+254 759 565 366</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                <span>icorediagnostics@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-blue-500" />
                <span>www.icorediagnostics.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Icore Diagnostics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
