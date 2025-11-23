import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Share2, Bookmark, MessageCircle, Copy, Check } from 'lucide-react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const promptText = `/imagine prompt: A hyper-realistic portrait of a couple, ${article.title.toLowerCase().slice(0, 20)} style, 8k resolution, cinematic lighting, bokeh background, shot on 35mm lens --ar 4:5 --v 6.0`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-300">
      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 h-14 flex items-center justify-between z-30">
        <button 
          onClick={onBack} 
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Share2 size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <Bookmark size={20} />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-video bg-gray-100">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-5 py-6 pb-20">
        
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 uppercase tracking-wide">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Author Meta */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <img 
                src={article.authorAvatar} 
                alt={article.author} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{article.author}</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar size={12} />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content (Simulated) */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            This is a comprehensive guide on <strong>{article.title}</strong>. In the world of AI photo editing, understanding the right prompts and settings is crucial for achieving professional results.
          </p>
          
          <p className="mb-6">
            Google Gemini has revolutionized how we approach photo manipulation. By using specific keywords and style descriptors, you can transform ordinary images into cinematic masterpieces.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features Explained</h3>
          <p className="mb-4">
            When working with this style, focus on lighting and composition. The AI interprets "cinematic lighting" as high contrast, dramatic shadows, and often a teal-orange color grading that is popular in modern film.
          </p>

          {/* Prompt Box */}
          <div className="my-8 bg-gray-900 rounded-xl p-6 text-white shadow-lg relative group">
            <button 
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all active:scale-95 border border-gray-700"
              title="Copy Prompt"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-gray-300" />}
            </button>
            
            <p className="font-mono text-sm text-gray-400 mb-2 select-none uppercase tracking-wider text-xs font-bold">
              {copied ? <span className="text-green-400 animate-pulse">Copied to clipboard!</span> : 'Prompt:'}
            </p>
            
            <p className="font-mono text-base leading-relaxed text-yellow-400 pr-8">
              "{promptText}"
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Step-by-Step Tutorial</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6 marker:text-gray-900 marker:font-bold">
            <li>Open your preferred AI image generator (Gemini, Midjourney, etc.).</li>
            <li>Copy the prompt provided above.</li>
            <li>Adjust the subject details to match your specific requirements.</li>
            <li>Hit generate and upscale your favorite result.</li>
          </ol>

          <p>
            Experiment with different aspect ratios like 16:9 for a movie look or 9:16 for social media stories. The possibilities are endless when you master these prompt engineering techniques.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Join our Telegram Channel</h3>
          <p className="text-sm text-gray-600 mb-4">Get daily prompt updates and exclusive presets directly to your phone.</p>
          <button className="inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg w-full sm:w-auto">
            <MessageCircle size={20} />
            Join Now on Telegram
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;