
import React from 'react';
import { Target, Users, HeartHandshake, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Caring for Your Health with <br />
            <span className="text-blue-600 font-extrabold underline decoration-blue-100 underline-offset-8">Precision & Empathy.</span>
          </h2>
          
          <div className="prose prose-slate prose-lg max-w-none mb-10 text-slate-600">
            <p className="mb-4">
              Founded on the belief that everyone deserves access to accurate medical answers, Icore Diagnostics has grown into a leading hub for pathology and imaging in the Athi River and Kitengela regions.
            </p>
            <p>
              We understand that behind every sample and every scan is a person seeking clarity. Whether it's a first-time parent seeing their child via ultrasound or a patient monitoring their health through routine blood work, we provide a calm, professional, and empathetic environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="bg-white p-2 rounded-lg text-blue-600 shadow-sm"><Target size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Our Mission</h4>
                <p className="text-sm text-slate-500">To deliver reliable, high-quality diagnostic results that empower clinicians and patients.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="bg-white p-2 rounded-lg text-blue-600 shadow-sm"><Award size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Quality Assured</h4>
                <p className="text-sm text-slate-500">Adhering to international standards in pathology and radiology.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" 
              alt="Lab equipment" 
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400" 
              alt="Ultrasound machine" 
              className="rounded-2xl h-48 w-full object-cover shadow-lg"
            />
          </div>
          <div className="space-y-4 pt-12">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" 
              alt="Doctor patient interaction" 
              className="rounded-2xl h-48 w-full object-cover shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1631217816660-ad442ad86a64?auto=format&fit=crop&q=80&w=400" 
              alt="Lab results" 
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
