# Souvik Konar — Portfolio

A personal portfolio website built with **React + Vite**, showcasing projects, skills, experience, and publications.

🔗 **Live Site:** [souvikkonar.github.io/Portfolio](https://SOUVIKKONAR.github.io/Portfolio/)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 18 |
| Bundler | Vite 5 |
| Styling | Vanilla CSS |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` (or whichever port Vite picks) to view the site.

---

## Project Structure

```
Portfolio/
├── public/
│   └── resumes/
│       ├── Souvik_Konar_Resume_AIML.pdf
│       └── Souvik_Konar_Resume_SDE.pdf
├── src/
│   ├── App.jsx        # Main layout and section components
│   ├── data.js        # ← All site content lives here
│   ├── main.jsx       # React entry point
│   └── styles.css     # Global styles
├── index.html
├── package.json
└── vite.config.js
```

---

## Updating Content

**All text, links, and project details are in a single file: [`src/data.js`](src/data.js)**

No need to touch any component code. Just edit `data.js` to update:

| Export | What it controls |
|--------|-----------------|
| `profile` | Name, email, phone, LinkedIn, GitHub, resume links |
| `quickFacts` | GPA, university, graduation year, location |
| `about` | About-me paragraphs |
| `skills` | Skill groups and their items |
| `projects` | Project cards (title, stack, bullet points, GitHub link) |
| `experience` | Work/internship entries with certificate links |
| `publication` | IEEE paper details and link |
| `certificates` | Certifications and hackathons list |

### Updating Resumes

Replace the PDF files in `public/resumes/` keeping the **same filenames**:
- `Souvik_Konar_Resume_AIML.pdf`
- `Souvik_Konar_Resume_SDE.pdf`

---

## Deployment

### GitHub Pages (current setup)

```bash
npm run deploy
```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch automatically.

**Full update workflow:**

```bash
git add .
git commit -m "your message"
git push              # updates source code on Main branch
npm run deploy        # rebuilds and updates the live site
```

### Switching to Vercel / Netlify

1. Change `base` in `vite.config.js` back to `"/"`
2. Remove the `homepage` field from `package.json`
3. Import the repo on Vercel/Netlify — it auto-detects Vite with no extra config needed

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish to GitHub Pages |

---

## License

This project is open source and available under the [MIT License](LICENSE).
