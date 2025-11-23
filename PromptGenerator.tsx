import React, { useState } from 'react';
import { Sparkles, Copy, Wand2, RefreshCw, Check } from 'lucide-react';

const STYLES = [
  'Cinematic', 
  'Anime/Manga', 
  'Photorealistic', 
  'Cyberpunk', 
  'Oil Painting', 
  '3D Render',
  'Minimalist'
];

const MOODS = [
  'Dramatic',
  'Cheerful',
  'Dark & Moody',
  'Romantic',
  'Mysterious',
  'Vibrant',
  'Peaceful'
];

const PromptGenerator: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [style, setStyle] = useState(STYLES[0]);
  const [mood, setMood] = useState(MOODS[0]);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsCopied(false);
    
    // Simulate AI delay
    setTimeout(() => {
      const baseSubject = subject.trim() || "a mysterious figure";
      const result = `High quality ${style} image of ${baseSubject}, featuring a ${mood} atmosphere, highly detailed, 8k resolution, trending on artstation, masterpiece lighting.`;
      setGeneratedPrompt(result);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="mx-4 mb-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 text-white flex items-center gap-2">
        <Wand2 size={20} className="text-yellow-300" />
        <h2 className="font-bold text-lg">AI Prompt Generator</h2>
      </div>

      <div className="p-5 space-y-4">
        {/* Input Section */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="E.g., A futuristic city with flying cars..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none text-sm bg-white"
              >
                {STYLES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none text-sm bg-white"
              >
                {MOODS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <RefreshCw size={18} className="animate-spin" />
              Generating Magic...
            </>
          ) : (
            <>
              <Sparkles size={18} className="text-yellow-400" />
              Generate Prompt
            </>
          )}
        </button>

        {/* Result Section */}
        {generatedPrompt && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-green-600">Generated Result</span>
              <button 
                onClick={copyToClipboard}
                className={`flex items-center gap-1 text-xs transition-colors ${isCopied ? 'text-green-600 font-medium' : 'text-gray-400 hover:text-blue-600'}`}
              >
                {isCopied ? (
                    <>
                        <Check size={12} /> Copied!
                    </>
                ) : (
                    <>
                        <Copy size={12} /> Copy
                    </>
                )}
              </button>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{generatedPrompt}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptGenerator;