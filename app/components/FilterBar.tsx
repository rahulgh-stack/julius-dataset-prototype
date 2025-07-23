'use client';

import { DatasetCategory, DatasetSource } from '../types';
import { Search, Filter } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: DatasetCategory | 'all';
  onCategoryChange: (category: DatasetCategory | 'all') => void;
  selectedSource: DatasetSource | 'all';
  onSourceChange: (source: DatasetSource | 'all') => void;
  selectedTag: string;
  onTagChange: (tag: string) => void;
  availableTags: string[];
}

const categories: Array<{ value: DatasetCategory | 'all', label: string }> = [
  { value: 'all', label: 'All Categories' },
  { value: 'customers', label: 'Customers' },
  { value: 'finance', label: 'Finance' },
  { value: 'health', label: 'Health' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'government', label: 'Government' },
  { value: 'environment', label: 'Environment' },
  { value: 'education', label: 'Education' },
];

const sources: Array<{ value: DatasetSource | 'all', label: string }> = [
  { value: 'all', label: 'All Sources' },
  { value: 'kaggle', label: 'Kaggle' },
  { value: 'tidytuesday', label: 'Tidy Tuesday' },
  { value: 'uci', label: 'UCI ML Repository' },
  { value: 'government', label: 'Government' },
  { value: 'other', label: 'Other' },
];

export default function FilterBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedSource,
  onSourceChange,
  selectedTag,
  onTagChange,
  availableTags,
}: FilterBarProps) {
  return (
    <div className="card p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none z-10" style={{ color: 'rgb(var(--muted-foreground))' }} />
            <input
              type="text"
              placeholder="Search datasets..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="input-field focus-ring w-full pl-10 pr-4"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value as DatasetCategory | 'all')}
              className="input-field focus-ring pl-4 pr-8 appearance-none min-w-[160px]"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4" style={{ color: 'rgb(var(--muted-foreground))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <select
              value={selectedSource}
              onChange={(e) => onSourceChange(e.target.value as DatasetSource | 'all')}
              className="input-field focus-ring pl-4 pr-8 appearance-none min-w-[140px]"
            >
              {sources.map((source) => (
                <option key={source.value} value={source.value}>
                  {source.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4" style={{ color: 'rgb(var(--muted-foreground))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              value={selectedTag}
              onChange={(e) => onTagChange(e.target.value)}
              className="input-field focus-ring pl-4 pr-8 appearance-none min-w-[140px]"
            >
              <option value="">All Tags</option>
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4" style={{ color: 'rgb(var(--muted-foreground))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tag Pills Display */}
      {availableTags.length > 0 && (
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgb(var(--border))' }}>
          <p className="text-small font-medium mb-3" style={{ color: 'rgb(var(--foreground))' }}>Popular Tags:</p>
          <div className="flex flex-wrap gap-2">
            {availableTags.slice(0, 15).map((tag) => (
              <button
                key={tag}
                onClick={() => onTagChange(selectedTag === tag ? '' : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'hover:opacity-70'
                }`}
                style={selectedTag !== tag ? { 
                  backgroundColor: 'rgb(37 99 235 / 0.1)', 
                  color: 'rgb(var(--primary))',
                  border: '1px solid rgb(37 99 235 / 0.2)'
                } : {}}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}