
import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { BranchId, BranchInfo } from '../types';
import { BRANCHES } from '../constants';

interface LocationsProps {
  currentBranch: BranchInfo;
  onBranchChange: (id: BranchId) => void;
}

const Locations: React.FC<LocationsProps> = ({ currentBranch, onBranchChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Find an Icore Near You</h2>
        <p className="text-slate-600">Visit us at any of our modern facilities in Athi River or Kitengela.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {Object.values(BRANCHES).map((branch) => (
          <div 
            key={branch.id}
            onClick={() => onBranchChange(branch.id)}
            className={`cursor-pointer group p-8 rounded-3xl border-2 transition-all duration-300 ${
              currentBranch.id === branch.id 
              ? 'border-blue-500 bg-white shadow-xl scale-[1.02]' 
              : 'border-slate-100 bg-slate-50 hover:border-blue-200'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${currentBranch.id === branch.id ? 'bg-blue-600 text-white' : 'bg-white text-slate-400'}`}>
                <MapPin size={28} />
              </div>
              <div className={`text-xs font-bold px-3 py-1 rounded-full ${currentBranch.id === branch.id ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-500'}`}>
                {branch.id === BranchId.KITENGELA ? '24/7 OPEN' : 'DAY BRANCH'}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">{branch.name}</h3>
            <p className="text-slate-500 mb-6 line-clamp-2">{branch.address}</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <Clock size={18} className="text-blue-500" />
                <span className="text-sm">{branch.hours}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone size={18} className="text-blue-500" />
                <span className="text-sm font-semibold">{branch.phone}</span>
              </div>
            </div>

            <button className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
              Get Directions
              <ExternalLink size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
