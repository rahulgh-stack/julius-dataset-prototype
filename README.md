# Julius AI Dataset Prototype

A Next.js application showcasing various datasets from Kaggle, Tidy Tuesday, and other public sources, organized by business application categories.

## 🚀 Live Demo

The application is deployed on GitHub Pages: [https://rahulgh-stack.github.io/julius-dataset-prototype/](https://rahulgh-stack.github.io/julius-dataset-prototype/)

## �️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application locally.

## �📦 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

### Setting up GitHub Pages (One-time setup)

1. Go to your repository settings: https://github.com/rahulgh-stack/julius-dataset-prototype/settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will automatically run on every push to main

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
```

The built files will be in the `out/` directory, ready for static hosting.

## 🎯 Features

- Dataset discovery and browsing
- Filtering by category and source
- Responsive design with Tailwind CSS
- Static site generation for optimal performance
- Real-world business applications focus

## Features

- **12+ Curated Datasets**: Real-world business datasets across 8 categories
- **Smart Filtering**: Search by name, description, tags, or business applications
- **Category Organization**: Customers, Finance, Health, Retail, Manufacturing, Government, Environment, Education
- **Source Identification**: Clear labeling of data sources (Kaggle, Tidy Tuesday, UCI, Government)
- **Business Applications**: Each dataset includes relevant business use cases
- **Julius Integration**: "Open with Julius!" buttons for seamless analysis workflow
- **Responsive Design**: Beautiful, modern UI that works on all devices

## Categories

- 🧑‍🤝‍🧑 **Customers**: Customer segmentation, behavior analysis
- 📈 **Finance**: Fraud detection, stock prices, housing markets
- ❤️ **Health**: Medical predictions, risk assessment
- 🏪 **Retail**: Sales analytics, e-commerce optimization
- 🏭 **Manufacturing**: Predictive maintenance, quality control
- 🏛️ **Government**: Public funding, policy analysis
- 🌱 **Environment**: Energy consumption, sustainability
- 🎓 **Education**: Student performance, academic analytics

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the prototype.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── DatasetCard.tsx    # Individual dataset display
│   │   └── FilterBar.tsx      # Search and filtering
│   ├── data/
│   │   └── datasets.ts        # Dataset definitions
│   ├── types.ts               # TypeScript interfaces
│   └── page.tsx               # Main application
├── public/                    # Static assets
└── ...config files
```

## Technologies

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive Design** principles