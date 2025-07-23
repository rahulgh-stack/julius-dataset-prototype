'use client';

import { useState, useMemo } from 'react';
import { datasets } from './data/datasets';
import { Dataset, DatasetCategory, DatasetSource } from './types';
import DatasetCard from './components/DatasetCard';
import FilterBar from './components/FilterBar';
import { Sparkles, Database } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DatasetCategory | 'all'>('all');
  const [selectedSource, setSelectedSource] = useState<DatasetSource | 'all'>('all');

  const filteredDatasets = useMemo(() => {
    return datasets.filter((dataset) => {
      const matchesSearch = dataset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dataset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dataset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          dataset.businessApplications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || dataset.category === selectedCategory;
      const matchesSource = selectedSource === 'all' || dataset.source === selectedSource;
      
      return matchesSearch && matchesCategory && matchesSource;
    });
  }, [searchTerm, selectedCategory, selectedSource]);

  const handleOpenWithJulius = (dataset: Dataset) => {
    // Simulate opening with Julius.ai
    const juliusUrl = `https://julius.ai/analyze?dataset=${encodeURIComponent(dataset.name)}&source=${dataset.source}`;
    window.open(juliusUrl, '_blank');
  };

  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    datasets.forEach(dataset => {
      stats[dataset.category] = (stats[dataset.category] || 0) + 1;
    });
    return stats;
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="nav-bar sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="https://mintlify.s3.us-west-1.amazonaws.com/julius-d061c216/logo/julius-wordmark-standard-blue.png"
                alt="Julius"
                width={80}
                height={24}
                className="animate-fade-in-up"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-small hover:text-gray-900 px-3 py-2 font-medium transition-colors">
                My Account
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="container py-20 text-center animate-fade-in-up">
          <h1 className="text-heading-1 mb-6 max-w-4xl mx-auto">
            Discover datasets that work for you
          </h1>
          <p className="text-body-large mb-12 max-w-2xl mx-auto">
            Explore real-world datasets from Kaggle, Tidy Tuesday, and more. 
            Connect your data, ask questions in plain English, and get insights in seconds.
          </p>
          <div className="flex justify-center items-center space-x-8 text-small mb-16">
            <div className="text-center">
              <div className="text-heading-2 text-foreground">{datasets.length}</div>
              <div className="text-muted-foreground">Curated Datasets</div>
            </div>
            <div className="text-center">
              <div className="text-heading-2 text-foreground">{Object.keys(categoryStats).length}</div>
              <div className="text-muted-foreground">Business Categories</div>
            </div>
            <div className="text-center">
              <div className="text-heading-2 text-foreground">Real-World</div>
              <div className="text-muted-foreground">Business Applications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: 'rgb(var(--muted))' }} className="min-h-screen">
        <div className="container py-12">
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedSource={selectedSource}
            onSourceChange={setSelectedSource}
          />

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-body">
              Showing <span className="font-semibold" style={{ color: 'rgb(var(--foreground))' }}>{filteredDatasets.length}</span> 
              {filteredDatasets.length === 1 ? ' dataset' : ' datasets'}
              {searchTerm && (
                <span>
                  {' '}matching "<span className="font-semibold" style={{ color: 'rgb(var(--primary))' }}>{searchTerm}</span>"
                </span>
              )}
            </p>
          </div>

          {/* Dataset Grid */}
          {filteredDatasets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset) => (
                <DatasetCard
                  key={dataset.id}
                  dataset={dataset}
                  onOpenWithJulius={handleOpenWithJulius}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Database className="w-16 h-16 mx-auto mb-4" style={{ color: 'rgb(var(--muted-foreground))' }} />
              <h3 className="text-heading-3 mb-2">No datasets found</h3>
              <p className="text-body">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white" style={{ borderTop: '1px solid rgb(var(--border))' }}>
          <div className="container py-16 text-center">
            <h2 className="text-heading-2 mb-4">
              Ready to analyze your data?
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Click "Open with Julius!" on any dataset to start your analysis journey. 
              Ask questions in plain English and get insights in seconds.
            </p>
            <a
              href="https://julius.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-4 px-8"
            >
              <span>Enter Julius</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}