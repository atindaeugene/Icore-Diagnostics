
import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { BranchInfo } from '../types';

interface HeroProps {
  currentBranch: BranchInfo;
}

const Hero: React.FC<HeroProps> = ({ currentBranch }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Wave Decorative Patterns based on the flyer */}
      <div className="absolute top-0 right-0 w-full h-[300px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#3b82f6" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,138.7C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-10 pointer-events-none rotate-180">
         <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#22c55e" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,138.7C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              <span>Reliable. Accurate. Affordable.</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Accessible <span className="text-blue-700">Ultrasound</span> & <br />
              Lab Services
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              For accessible, reliable and affordable ultrasound services in Kitengela and Athi River. 
              Trust Icore Diagnostics for clinical excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#results"
                className="flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200"
              >
                Book Your Appointment
                <ArrowRight size={20} />
              </a>
              <a 
                href="tel:+254759565366"
                className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Call Us Now
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: 'Reliable Results', icon: <CheckCircle2 className="text-green-500" /> },
                { label: 'Affordable Rates', icon: <CheckCircle2 className="text-green-500" /> },
                { label: 'Accessible Care', icon: <ShieldCheck className="text-blue-500" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 scale-95 opacity-5 group-hover:rotate-2 transition-transform"></div>
            {/* The ultrasound image in the flyer is iconic, using a high-quality representation here */}
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Ultrasound Diagnostic" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px] transform group-hover:-translate-y-2 transition-transform duration-500"
            />
            
            {/* Contact Overlay inspired by flyer */}
            <div className="absolute -bottom-6 right-0 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[280px]">
              <div className="flex items-center gap-4">
                <div className="bg-blue-700 p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Us</div>
                  <div className="text-lg font-bold text-blue-800 leading-tight">+254 759 565 366</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Phone = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default Hero;
