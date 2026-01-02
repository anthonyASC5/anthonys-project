# Anthony Lall's Portfolio

A modern, production-ready portfolio website. Originally built in Google AI Studio, converted to a standard Vite + React + Node.js stack with secure API handling.

**Features:**
- ✨ React 19 + TypeScript frontend
- 🔒 Secure backend proxy for APIs (no browser-exposed secrets)
- 🚀 Vite build tooling (fast dev, optimized production builds)
- 📱 Responsive, macOS-inspired UI
- 🔧 Ready for Gemini AI integration

---

## Quick Start (Local Development)

### Prerequisites
- **Node.js 18+** and **npm**

### Setup

1. **Clone and install:**
   ```bash
   npm install
   ```

2. **Create `.env.local` (for backend only):**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your GEMINI_API_KEY (optional, not required for basic site)
   ```

3. **Start development (two terminals):**
   
   **Terminal 1 - Frontend:**
   ```bash
   npm run dev:frontend
   # Opens http://localhost:5173
   ```

   **Terminal 2 - Backend:**
   ```bash
   npm run dev:server
   # Runs on http://localhost:3001
   ```

   **Or both at once:**
   ```bash
   npm run dev
   ```

### Development Commands

```bash
npm run dev:frontend    # Vite dev server (React frontend)
npm run dev:server      # Node backend with hot reload
npm run build           # Production build
npm run preview         # Preview production build
npm run start           # Run production backend
npm run type-check      # TypeScript type checking
npm run lint            # ESLint (if configured)
```

---

## Architecture

### Frontend (`src/`)
- React 19 with TypeScript
- Tailwind CSS styling
- Vite for bundling and hot reload
- No API keys exposed to browser

### Backend (`server/api.ts`)
- Express.js REST API
- CORS configured for dev/prod
- Ready for Gemini integration
- All API keys stored server-side only

### How API Calls Work
1. Frontend calls `/api/*` endpoints
2. Vite proxy routes to `http://localhost:3001/api/*`
3. Backend handles requests, calls external APIs securely
4. Response returned to frontend (no secrets ever exposed)

```
Frontend (http://localhost:5173)
    ↓
Vite Proxy: /api/* → http://localhost:3001/api/*
    ↓
Express Backend (http://localhost:3001)
    ↓
(Uses GEMINI_API_KEY from .env.local)
```

---

## Environment Variables

### `.env.local` (Backend, Never Commit)
```
GEMINI_API_KEY=your_real_key_here
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

**Important:**
- `.env.local` is ignored by git
- Only backend can access these variables
- Never use these in frontend code
- Use `import.meta.env.VITE_*` in frontend only (for non-secrets)

---

## Production Deployment

### Build
```bash
npm run build
# Creates optimized `dist/` folder
```

### Deploy Frontend
Deploy the `dist/` folder to:
- **Static hosting:** Vercel, Netlify, GitHub Pages, AWS S3 + CloudFront
- **Recommended:** Vercel (free, automatic builds, fast)

### Deploy Backend
Deploy `server/api.ts` to:
- **Recommended:** Google Cloud Run (free tier, auto-scaling)
- Also works: Heroku, Railway, AWS Lambda, DigitalOcean, Fly.io

**Example: Google Cloud Run**
```bash
# Create app.yaml
runtime: nodejs20
env: standard

# Deploy
gcloud app deploy
```

### Before Deploying
1. Update `CORS_ORIGIN` in backend `.env` (your production frontend URL)
2. Set `GEMINI_API_KEY` in backend environment
3. Verify frontend builds without errors: `npm run build`
4. Test backend starts: `npm run start`

---

## AI Studio → Production Migration

This repo was originally exported from Google AI Studio. The conversion ensures:

✅ **Security:** No API keys in browser bundle  
✅ **Reproducibility:** Standard npm + Vite workflow  
✅ **Portability:** Works anywhere Node.js runs  
✅ **Scalability:** Backend can handle production traffic  
✅ **Maintainability:** Clear separation of frontend/backend  

### What Changed
- Removed ESM importmap (React now bundled by Vite)
- Removed `process.env.*` from frontend
- Added Express backend for API calls
- Restructured files: `src/` frontend, `server/` backend
- Added `.env.example` and proper `.gitignore`

See `MIGRATION.md` for detailed changes.

---

## Adding Gemini AI Features

To enable Gemini integration:

1. **Get API Key:**
   - Go to https://aistudio.google.com/app/apikey
   - Create free API key
   - Add to `.env.local`: `GEMINI_API_KEY=your_key_here`

2. **Update Backend (`server/api.ts`):**
   ```typescript
   import { GoogleGenerativeAI } from '@google/generative-ai';

   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
   const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
   const result = await model.generateContent(message);
   ```

3. **Frontend Calls Backend:**
   ```typescript
   const response = await fetch('/api/chat', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ message: userInput })
   });
   ```

4. **Install SDK:**
   ```bash
   npm install @google/generative-ai
   ```

---

## Troubleshooting

**Port already in use?**
```bash
# Change port in .env.local
PORT=3002

# Or kill process using port
lsof -ti:3001 | xargs kill -9
```

**Frontend can't reach backend?**
- Check backend is running on port 3001
- Verify Vite proxy config in `vite.config.ts`
- Check CORS: `CORS_ORIGIN=http://localhost:5173`

**TypeScript errors?**
```bash
npm run type-check
# Install any missing types: npm install --save-dev @types/package-name
```

---

## Technologies

- **Frontend:** React 19, TypeScript, Tailwind CSS, Vite 6
- **Backend:** Express.js, Node.js, dotenv
- **Build:** Vite, tsx (TypeScript executor)
- **API:** Google Generative AI (optional)
- **Hosting:** Vercel (frontend), Cloud Run (backend)

---

## License

MIT

---

**Ready for production. Ship with confidence!** 🚀

