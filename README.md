# Tanishq Tiwari — Portfolio

A single-page portfolio showcasing my work across econometrics, machine learning,
quantitative finance, and data engineering. Pure HTML/CSS/JS — no build step.

```
portfolio/
├── index.html      # the page
├── styles.css      # all styling
├── main.js         # project data, filtering, PDF viewer
├── .nojekyll       # tells GitHub Pages to serve files as-is
└── files/          # report PDFs, notebooks, slides, docs
```

## Preview locally

Just open `index.html` in a browser. (Some browsers block PDF iframes when opened
via `file://` — if the in-page PDF viewer looks blank, run a tiny local server:)

```powershell
# from inside the portfolio/ folder
python -m http.server 8000
# then visit http://localhost:8000
```

## Publish free on GitHub Pages

1. **Create a repo.** On github.com, make a new repository — name it
   `portfolio` (or, for a root URL like `username.github.io`, name it
   exactly `<your-username>.github.io`).

2. **Push this folder.** From inside `portfolio/`:

   ```powershell
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

3. **Turn on Pages.** Repo → **Settings** → **Pages** → under *Build and
   deployment*, set **Source = Deploy from a branch**, **Branch = main**,
   **Folder = / (root)** → **Save**.

4. **Visit your site** after ~1 minute:
   - `https://<your-username>.github.io/portfolio/`
   - or `https://<your-username>.github.io/` if you named the repo `<username>.github.io`.

## Customize

- **Projects** live in the `PROJECTS` array at the top of `main.js` — edit text,
  tags, or links there.
- **LinkedIn / GitHub** links are placeholders in `index.html` (search for
  `linkedin.com` and `github.com`) — point them at your profiles.
- **Colors / fonts** are CSS variables at the top of `styles.css`.

## Note on data

`files/sql-retail-analysis.ipynb` had a hardcoded local database password; it has
been replaced with `YOUR_PASSWORD_HERE` before inclusion here.
