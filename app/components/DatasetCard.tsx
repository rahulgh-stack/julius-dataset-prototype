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
    <div className="card p-5 animate-fade-in-up h-full flex flex-col hover:scale-[1.02] transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${categoryColors[dataset.category]}`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            {dataset.source === 'kaggle' ? (
              <div className="flex flex-col items-center">
                <Image
                  src="https://www.kaggle.com/static/images/site-logo.svg"
                  alt="Kaggle"
                  width={28}
                  height={28}
                  className="mb-1"
                />
                <p className="text-xs font-medium text-gray-600">Kaggle</p>
              </div>
            ) : (
              <>
                <span className="text-xl">{sourceLogos[dataset.source]}</span>
                <p className="text-xs font-medium capitalize text-gray-600">{dataset.source}</p>
              </>
            )}
          </div>
        </div>
        {dataset.url && (
          <a
            href={dataset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-1 rounded-md transition-colors hover:bg-gray-100"
            style={{ color: 'rgb(var(--muted-foreground))' }}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-3 leading-tight min-h-[3rem] flex items-start" style={{ color: 'rgb(var(--foreground))' }}>
        {dataset.name}
      </h3>
      <p className="text-small mb-4 line-clamp-3 flex-1 leading-relaxed">{dataset.description}</p>

      <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgb(var(--border))' }}>
        <div className="grid grid-cols-3 gap-2 text-xs font-medium" style={{ color: 'rgb(var(--muted-foreground))' }}>
          <div className="text-center">
            <Database className="w-4 h-4 mx-auto mb-1" />
            <div className="font-semibold text-gray-900">{dataset.records?.toLocaleString() || 'N/A'}</div>
            <div className="text-xs">rows</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{dataset.features || 'N/A'}</div>
            <div className="text-xs">cols</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{dataset.fileSize || 'N/A'}</div>
            <div className="text-xs">size</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>Applications:</p>
        <div className="flex flex-wrap gap-1.5">
          {dataset.businessApplications.slice(0, 2).map((app, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full text-xs font-medium truncate max-w-[120px]"
              style={{ 
                backgroundColor: 'rgb(var(--muted))', 
                color: 'rgb(var(--muted-foreground))',
                border: '1px solid rgb(var(--border))'
              }}
              title={app}
            >
              {app}
            </span>
          ))}
          {dataset.businessApplications.length > 2 && (
            <span 
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgb(var(--muted))', 
                color: 'rgb(var(--muted-foreground))',
                border: '1px solid rgb(var(--border))'
              }}
            >
              +{dataset.businessApplications.length - 2}
            </span>
          )}
        </div>
      </div>

      <div className="mb-5">
        <div className="flex flex-wrap gap-1.5">
          {dataset.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgb(37 99 235 / 0.1)', 
                color: 'rgb(var(--primary))',
                border: '1px solid rgb(37 99 235 / 0.2)'
              }}
            >
              {tag}
            </span>
          ))}
          {dataset.tags.length > 4 && (
            <span
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgb(37 99 235 / 0.1)', 
                color: 'rgb(var(--primary))',
                border: '1px solid rgb(37 99 235 / 0.2)'
              }}
            >
              +{dataset.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => onOpenWithJulius(dataset)}
        className="btn-primary w-full text-sm py-2.5 px-4 font-semibold"
      >
        <span>Open with Julius!</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}