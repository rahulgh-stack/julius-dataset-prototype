'use client';

import { Dataset } from '../types';
import { ExternalLink, Database, Users, TrendingUp, Shield, Heart, Factory, Building, Leaf, GraduationCap } from 'lucide-react';
import Image from 'next/image';

interface DatasetCardProps {
  dataset: Dataset;
  onOpenWithJulius: (dataset: Dataset) => void;
}

const categoryIcons = {
  customers: Users,
  finance: TrendingUp,
  health: Heart,
  retail: Building,
  manufacturing: Factory,
  government: Shield,
  environment: Leaf,
  education: GraduationCap,
};

const sourceLogos = {
  kaggle: 'kaggle-logo',
  tidytuesday: '📊',
  uci: '🎓',
  government: '🏛️',
  other: '📁',
};

const categoryColors = {
  customers: 'bg-blue-100 text-blue-800 border-blue-200',
  finance: 'bg-green-100 text-green-800 border-green-200',
  health: 'bg-red-100 text-red-800 border-red-200',
  retail: 'bg-purple-100 text-purple-800 border-purple-200',
  manufacturing: 'bg-orange-100 text-orange-800 border-orange-200',
  government: 'bg-gray-100 text-gray-800 border-gray-200',
  environment: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  education: 'bg-indigo-100 text-indigo-800 border-indigo-200',
};

export default function DatasetCard({ dataset, onOpenWithJulius }: DatasetCardProps) {
  const IconComponent = categoryIcons[dataset.category];
  
  return (
    <div className="card p-6 animate-fade-in-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${categoryColors[dataset.category]}`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            {dataset.source === 'kaggle' ? (
              <div className="flex flex-col items-center">
                <Image
                  src="https://www.kaggle.com/static/images/site-logo.svg"
                  alt="Kaggle"
                  width={32}
                  height={32}
                  className="mb-1"
                />
                <p className="text-small font-medium capitalize">kaggle</p>
              </div>
            ) : (
              <>
                <span className="text-2xl">{sourceLogos[dataset.source]}</span>
                <p className="text-small font-medium capitalize">{dataset.source}</p>
              </>
            )}
          </div>
        </div>
        {dataset.url && (
          <a
            href={dataset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-70"
            style={{ color: 'rgb(var(--muted-foreground))' }}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <h3 className="text-heading-3 mb-3">{dataset.name}</h3>
      <p className="text-body mb-4 line-clamp-3">{dataset.description}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-small">
          {dataset.records && (
            <div className="flex items-center space-x-1">
              <Database className="w-4 h-4" style={{ color: 'rgb(var(--muted-foreground))' }} />
              <span>{dataset.records.toLocaleString()} rows</span>
            </div>
          )}
          {dataset.features && (
            <span>{dataset.features} features</span>
          )}
          {dataset.fileSize && (
            <span>{dataset.fileSize}</span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-small font-medium mb-2" style={{ color: 'rgb(var(--foreground))' }}>Business Applications:</p>
        <div className="flex flex-wrap gap-1">
          {dataset.businessApplications.slice(0, 3).map((app, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgb(var(--muted))', 
                color: 'rgb(var(--muted-foreground))',
                border: '1px solid rgb(var(--border))'
              }}
            >
              {app}
            </span>
          ))}
          {dataset.businessApplications.length > 3 && (
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgb(var(--muted))', 
                color: 'rgb(var(--muted-foreground))',
                border: '1px solid rgb(var(--border))'
              }}
            >
              +{dataset.businessApplications.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-1">
          {dataset.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full text-xs"
              style={{ 
                backgroundColor: 'rgb(37 99 235 / 0.1)', 
                color: 'rgb(var(--primary))',
                border: '1px solid rgb(37 99 235 / 0.2)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onOpenWithJulius(dataset)}
        className="btn-primary w-full"
      >
        <span>Open with Julius!</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}