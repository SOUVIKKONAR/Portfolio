# Souvik Konar: Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev
```

## Edit content
All text, links and project details are in `src/data.js`.
Resume PDFs are in `public/resumes/` (replace the files with the same names to update them).

## Build
```
npm run build      # outputs to dist/
npm run preview
```

## Deploy
- **Vercel / Netlify:** push this folder to GitHub, import the repo, build command `npm run build`, output directory `dist`. Nothing else to configure.
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.js`, run `npm run build`, and publish the `dist/` folder (for example with the `gh-pages` package or a GitHub Actions workflow).
