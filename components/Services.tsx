
import React from 'react';
import { Droplets, Baby, TestTube2, Activity, Microscope, HeartPulse, Shield } from 'lucide-react';
import { SERVICES } from '../constants';

const Icons: Record<string, any> = {
  Droplets, Baby, TestTube2, Activity
};

const Services: React.FC = () => {
  const labServices = SERVICES.filter(s => s.category === 'LAB');
  const ultrasoundServices = SERVICES.filter(s => s.category === 'ULTRASOUND');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Specialized Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          State-of-the-art diagnostic solutions tailored to your health needs. We combine technology with medical expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Lab Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="bg-blue-600 p-3 rounded-xl text-white">
              <Microscope size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Clinical Laboratory</h3>
              <p className="text-blue-700 font-medium">Pathology, Microbiology & Blood Work</p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {labServices.map((service, idx) => {
              const Icon = Icons[service.icon];
              return (
                <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{service.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ultrasound Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800">
            <div className="bg-blue-500 p-3 rounded-xl text-white">
              <HeartPulse size={32} />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold">Advanced Ultrasound</h3>
              <p className="text-blue-400 font-medium">Obstetric, Abdominal & Doppler</p>
            </div>
          </div>

          <div className="grid gap-6">
            {ultrasoundServices.map((service, idx) => {
              const Icon = Icons[service.icon];
              return (
                <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{service.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Patient Instructions for Optimal Results</h3>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500">
              <div className="flex items-center gap-2 font-bold mb-3">
                <Shield size={20} className="text-blue-200" />
                Fasting Requirements
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                For Lipid Profiles, Glucose (Blood Sugar), and most Biochemistry tests, please fast for 8-12 hours. You may only drink plain water during this period.
              </p>
            </div>
            <div className="bg-blue-700/50 p-6 rounded-xl border border-blue-500">
              <div className="flex items-center gap-2 font-bold mb-3">
                <Shield size={20} className="text-blue-200" />
                Ultrasound Preparation
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                For Pelvic or Obstetric scans (early pregnancy), drink 3-4 glasses of water 1 hour before and do not empty your bladder. Abdominal scans may require fasting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
