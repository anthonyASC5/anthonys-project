<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Anthony Lall's Portfolio

Production-ready portfolio site. Originally built in Google AI Studio, converted to a standard Vite + React + TypeScript setup with no external dependencies or importmaps.

**Live Site:** https://anthonyASC5.github.io/anthonys-project/

## Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages on every push to `master` via GitHub Actions (see [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

**Manual deployment:** Push to `master` and the workflow will handle the rest.

## Architecture

- **Frontend:** React 19 + TypeScript + Tailwind CSS
- **Bundler:** Vite 6
- **Package Manager:** npm
- **Hosting:** GitHub Pages

## Migration Notes (AI Studio → Production)

This repo was originally created as a Google AI Studio download with ESM importmaps and client-side API key exposure. The following changes were made for production readiness:

### What Changed
- ✅ **Removed importmap:** React now imported via npm, bundled with Vite
- ✅ **Removed API key exposure:** `process.env.GEMINI_API_KEY` removed from vite config (was unsafe)
- ✅ **Proper build output:** TypeScript compiled, assets optimized for GitHub Pages
- ✅ **Environment setup:** Added `.env.example` and `.gitignore` for secrets management

### Files Changed
- `index.html` - Removed `<script type="importmap">` block; fixed entry point to `/src/index.tsx`
- `vite.config.ts` - Removed `loadEnv` and `process.env` define (no browser secrets); added `base: '/anthonys-project/'` for GitHub Pages
- `.gitignore` - Added `.env` / `.env.local` to prevent accidental secret commits
- Added `.env.example` - Documents potential environment variables (none required currently)
- `.github/workflows/deploy.yml` - Automatic CI/CD pipeline

### Why These Changes?
1. **Security:** Browser bundles should never contain API keys. If you add Gemini features, move them server-side.
2. **Portability:** No AI Studio proxying required; works anywhere Node.js runs
3. **Standard Stack:** Any developer can pick this up and understand the structure
4. **Reproducibility:** `npm install` + `npm run build` = same output every time

### Future Enhancements
If you add Gemini or other external APIs:
1. Create `server/api.ts` (Node + Express/Fastify)
2. Move all API calls to the backend
3. Frontend calls `POST /api/...` endpoints instead
4. Keep backend env vars in `.env` (not bundled to browser)

---

**Built with Vite | React | TypeScript | Tailwind CSS**
