import React from 'react';
import { Category } from '../types';

interface CategoryRailProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelect: (categoryName: string | null) => void;
}

const CategoryRail: React.FC<CategoryRailProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="w-full py-6 overflow-x-auto no-scrollbar bg-white border-b border-gray-100">
      <div className="flex gap-4 px-4 min-w-max mx-auto max-w-3xl">
        {/* "All" Option */}
        <button 
            onClick={() => onSelect(null)}
            className="group flex flex-col items-center gap-2 w-20 flex-shrink-0"
        >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${selectedCategory === null ? 'bg-gray-800 border-gray-800 text-white scale-105' : 'bg-gray-100 border-gray-200 text-gray-400 group-hover:border-gray-400'}`}>
               <span className="font-bold text-xs uppercase">All</span>
            </div>
            <span className={`text-xs font-medium text-center leading-tight ${selectedCategory === null ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
              All Posts
            </span>
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button 
                key={cat.id}
                onClick={() => onSelect(isSelected ? null : cat.name)}
                className="group flex flex-col items-center gap-2 w-24 flex-shrink-0"
            >
                <div className={`w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 transition-transform duration-300 ${isSelected ? 'scale-110 ring-2 ring-blue-500 ring-offset-2' : 'group-hover:scale-105'}`}>
                <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                />
                </div>
                <span className={`text-xs font-medium text-center leading-tight transition-colors ${isSelected ? 'text-blue-600 font-bold' : 'text-gray-700 group-hover:text-blue-600'}`}>
                {cat.name}
                </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryRail;