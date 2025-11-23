import React from 'react';
import { Menu, Search, Share2, Bookmark, MoreVertical } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-1 hover:bg-gray-100 rounded-full">
            <Menu size={24} className="text-gray-700" />
          </button>
          
          <div className="flex flex-col">
            <h1 className="font-bold text-lg leading-tight text-gray-800">Ai Prompt Editing</h1>
            <span className="text-xs text-gray-500">aipromptediting.in</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Share2 size={20} />
          </button>
          <button className="text-gray-600 hover:text-gray-900 hidden sm:block">
            <Bookmark size={20} />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;