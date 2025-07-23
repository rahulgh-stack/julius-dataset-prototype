export interface Dataset {
  id: string;
  name: string;
  description: string;
  category: DatasetCategory;
  source: DatasetSource;
  url?: string;
  records?: number;
  features?: number;
  fileSize?: string;
  tags: string[];
  businessApplications: string[];
}

export type DatasetCategory = 
  | 'customers'
  | 'finance'
  | 'health'
  | 'retail'
  | 'manufacturing'
  | 'government'
  | 'environment'
  | 'education';

export type DatasetSource = 'kaggle' | 'tidytuesday' | 'uci' | 'government' | 'other';