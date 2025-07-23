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
}: FilterBarProps) {
  return (
    <div className="card p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'rgb(var(--muted-foreground))' }} />
            <input
              type="text"
              placeholder="Search datasets..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="input-field focus-ring w-full pl-10 pr-4"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'rgb(var(--muted-foreground))' }} />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value as DatasetCategory | 'all')}
              className="input-field focus-ring pl-10 pr-8 appearance-none min-w-[160px]"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
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
          </div>
        </div>
      </div>
    </div>
  );
}