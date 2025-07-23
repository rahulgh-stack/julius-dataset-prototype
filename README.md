# Julius Datasets Prototype

A feature prototype for Julius.ai that showcases real-world datasets from various sources including Kaggle, Tidy Tuesday, and other public repositories.

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