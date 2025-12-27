
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquareText, X, Bot, Loader2 } from 'lucide-react';
import { GeminiAssistant } from '../services/geminiService';

const VoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('Assistant is offline');
  const [transcription, setTranscription] = useState('');
  const assistantRef = useRef<GeminiAssistant | null>(null);

  useEffect(() => {
    assistantRef.current = new GeminiAssistant();
    return () => {
      assistantRef.current?.disconnect();
    };
  }, []);

  const toggleAssistant = async () => {
    if (isActive) {
      assistantRef.current?.disconnect();
      setIsActive(false);
      setStatus('Assistant is offline');
    } else {
      setStatus('Initializing...');
      setIsActive(true);
      await assistantRef.current?.connect(
        (text) => setTranscription(text),
        (newStatus) => setStatus(newStatus)
      );
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <div className="absolute -top-12 right-0 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Hi! I'm Icore Voice Concierge
          </div>
          <Bot size={28} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-80 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Icore Concierge</h3>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`}></span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{isActive ? 'Live' : 'Offline'}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="bg-slate-50 rounded-2xl p-4 min-h-[120px] mb-6 flex flex-col justify-center text-center">
              {isActive ? (
                <div className="space-y-4">
                  <p className="text-slate-700 font-medium text-sm leading-relaxed italic">
                    {transcription || status}
                  </p>
                  {status === 'Connected. How can I help?' && !transcription && (
                    <div className="flex justify-center gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-slate-400 text-sm">Ask me about fasting instructions, ultrasound preparation, or our branch locations.</p>
              )}
            </div>

            <button
              onClick={toggleAssistant}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
                isActive 
                ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
              }`}
            >
              {isActive ? (
                <>
                  <MicOff size={20} />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic size={20} />
                  Start Conversation
                </>
              )}
            </button>
            <p className="mt-4 text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">Powered by Gemini AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;
