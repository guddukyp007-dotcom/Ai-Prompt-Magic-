import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          
          <div 
            onClick={() => onNavigate('home')}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform"
          >
             <span className="text-black font-black text-xl">Ai</span>
          </div>
          
          <h3 className="font-bold text-xl mb-2">Ai Prompt Editing</h3>
          <p className="text-gray-400 text-sm max-w-md mb-8">
            The #1 source for trending AI prompts, tutorials, and editing assets. Join our community today.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={18} /></button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition-colors"><Twitter size={18} /></button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={18} /></button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-colors"><Linkedin size={18} /></button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"><Youtube size={18} /></button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>

          <div className="border-t border-gray-800 w-full pt-6">
             <p className="text-xs text-gray-500">© 2025 Ai Prompt Editing. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;