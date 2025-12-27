
import { GoogleGenAI, Modality } from "@google/genai";

export class GeminiAssistant {
  private ai: any;
  private session: any = null;
  private audioContext: AudioContext | null = null;
  private nextStartTime = 0;
  private sources = new Set<AudioBufferSourceNode>();

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async connect(onTranscription: (text: string) => void, onStatusChange: (status: string) => void) {
    if (!process.env.API_KEY) {
      onStatusChange("API Key missing. Voice assistant unavailable.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const inputContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });

      this.session = await this.ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            onStatusChange("Connected. How can I help?");
            const source = inputContext.createMediaStreamSource(stream);
            const scriptProcessor = inputContext.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = this.createBlob(inputData);
              if (this.session) {
                this.session.sendRealtimeInput({ media: pcmBlob });
              }
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputContext.destination);
          },
          onmessage: async (message: any) => {
            if (message.serverContent?.outputTranscription) {
              onTranscription(message.serverContent.outputTranscription.text);
            }

            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && this.audioContext) {
              this.nextStartTime = Math.max(this.nextStartTime, this.audioContext.currentTime);
              const buffer = await this.decodeAudioData(this.decode(base64Audio), this.audioContext, 24000, 1);
              const source = this.audioContext.createBufferSource();
              source.buffer = buffer;
              source.connect(this.audioContext.destination);
              source.start(this.nextStartTime);
              this.nextStartTime += buffer.duration;
              this.sources.add(source);
              source.onended = () => this.sources.delete(source);
            }

            if (message.serverContent?.interrupted) {
              this.sources.forEach(s => s.stop());
              this.sources.clear();
              this.nextStartTime = 0;
            }
          },
          onerror: (e: any) => onStatusChange("Connection error."),
          onclose: () => onStatusChange("Disconnected."),
        },
        config: {
          responseModalities: [Modality.AUDIO],
          outputAudioTranscription: {},
          systemInstruction: "You are Icore Concierge, a friendly voice assistant for Icore Diagnostics. Provide information about lab tests (fasting requirements, lipid profiles, etc.), ultrasound scans (pregnancy, abdominal), locations (Greatwall Gardens and Kitengela Town), and hours of operation. Keep answers medical, empathetic, and professional."
        }
      });
    } catch (err) {
      console.error(err);
      onStatusChange("Failed to start microphone.");
    }
  }

  private createBlob(data: Float32Array) {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) int16[i] = data[i] * 32768;
    return {
      data: this.encode(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  }

  private encode(bytes: Uint8Array) {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  private decode(base64: string) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  private async decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  disconnect() {
    if (this.session) this.session.close();
    this.sources.forEach(s => s.stop());
    this.sources.clear();
  }
}
