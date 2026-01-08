# Anthony Lall Portfolio

A minimal, Apple-inspired personal portfolio website showcasing UI/UX design and software development projects.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Fonts**: Inter (Google Fonts)

## Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm 9+ (or pnpm/yarn)

## Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anthony-lall-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open automatically at [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── index.html           # Entry HTML file
├── src/
│   ├── main.tsx         # React entry point
│   ├── index.css        # Global styles + Tailwind imports
│   ├── App.tsx          # Main application component
│   ├── Projects.tsx     # Project detail components
│   ├── Gallery.tsx      # Photography gallery component
│   └── DitherMachine.tsx# Image processing tool component
├── public/              # Static assets (if needed)
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

