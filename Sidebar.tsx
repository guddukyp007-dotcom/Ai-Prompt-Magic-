import React, { useState } from 'react';
import { X, ChevronDown, Home, Lightbulb, Mail, Shield, Info } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  const [isIdeaOpen, setIsIdeaOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    onClose(); // Close sidebar after navigation
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2">
             {/* Logo placeholder */}
             <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-yellow-400 font-bold text-sm border-2 border-yellow-400">
              Ai
            </div>
            <span className="font-bold text-gray-800">Ai Prompt Editing</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <button 
            onClick={() => handleNavClick('home')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </button>

          <div>
            <button 
              onClick={() => setIsIdeaOpen(!isIdeaOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lightbulb size={20} className="text-yellow-500" />
                <span className="font-medium">Prompt Creating Idea</span>
              </div>
              <ChevronDown size={16} className={`transition-transform ${isIdeaOpen ? 'rotate-180' : ''}`} />
            </button>
            {isIdeaOpen && (
              <div className="pl-12 pr-4 py-2 space-y-2">
                <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600">Basic Prompts</button>
                <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600">Advanced Techniques</button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Mail size={20} />
            <span className="font-medium">Contact Us</span>
          </button>

          <button 
            onClick={() => handleNavClick('privacy')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Shield size={20} />
            <span className="font-medium">Privacy Policy</span>
          </button>

          <button 
            onClick={() => handleNavClick('about')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Info size={20} />
            <span className="font-medium">About Us</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;