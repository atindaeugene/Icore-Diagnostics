
import React, { useState } from 'react';
import { Search, FileText, CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { TestResult } from '../types';

const TestResults: React.FC = () => {
  const [refId, setRefId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refId) return;

    setIsSearching(true);
    setResult(null);

    // Simulated API Call
    setTimeout(() => {
      setIsSearching(false);
      if (refId.toUpperCase() === 'ICORE-123') {
        setResult({
          id: 'ICORE-123',
          patientName: 'John Doe',
          status: 'READY',
          testDate: '2023-11-20',
          message: 'Your lab report is ready for collection and has been sent to your email.'
        });
      } else if (refId.toUpperCase() === 'ICORE-999') {
        setResult({
          id: 'ICORE-999',
          patientName: 'Jane Smith',
          status: 'PENDING',
          testDate: '2023-11-24',
          message: 'Your samples are still being processed. Expect results by tomorrow 10:00 AM.'
        });
      } else {
        setResult({
          id: refId,
          patientName: 'Unknown',
          status: 'NOT_FOUND',
          testDate: '',
          message: 'We could not find a record with this reference ID. Please check your receipt or contact us.'
        });
      }
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="md:flex">
          <div className="bg-blue-600 p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-center">
            <FileText size={48} className="mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Check Your Test Results</h2>
            <p className="text-blue-100 leading-relaxed">
              Fast, secure, and private. Access your reports anytime by entering your unique Reference ID provided at the time of testing.
            </p>
          </div>
          
          <div className="p-8 md:p-12 md:w-3/5">
            <form onSubmit={handleLookup} className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Reference ID</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={refId}
                  onChange={(e) => setRefId(e.target.value)}
                  placeholder="e.g., ICORE-123"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg font-medium"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              <button 
                type="submit"
                disabled={isSearching || !refId}
                className="w-full mt-4 bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSearching ? <Loader2 className="animate-spin" /> : 'Find My Report'}
              </button>
            </form>

            {result && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className={`p-6 rounded-2xl border ${
                  result.status === 'READY' ? 'bg-green-50 border-green-100' :
                  result.status === 'PENDING' ? 'bg-amber-50 border-amber-100' :
                  'bg-red-50 border-red-100'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {result.status === 'READY' ? <CheckCircle className="text-green-600" /> :
                       result.status === 'PENDING' ? <Clock className="text-amber-600" /> :
                       <AlertCircle className="text-red-600" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-slate-900">Patient: {result.patientName}</span>
                        <span className="text-xs px-2 py-0.5 bg-slate-200 rounded text-slate-600 font-bold">{result.id}</span>
                      </div>
                      <div className="text-sm text-slate-600 mb-3 uppercase tracking-wider font-semibold">
                        Status: <span className={
                          result.status === 'READY' ? 'text-green-700' :
                          result.status === 'PENDING' ? 'text-amber-700' :
                          'text-red-700'
                        }>{result.status}</span>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{result.message}</p>
                      
                      {result.status === 'READY' && (
                        <button className="mt-4 flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                          <FileText size={18} />
                          Download Full PDF Report
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-slate-500 text-sm">
        <p>Your privacy is our priority. All results are encrypted and accessible only with your unique ID.</p>
        <p className="mt-1">Having trouble? Call our support at +254 700 000 000</p>
      </div>
    </div>
  );
};

export default TestResults;
