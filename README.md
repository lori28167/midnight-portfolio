# Lori's Portfolio (static)

This is a minimal static portfolio site scaffold. It is intended to be customized and deployed to GitHub Pages or any static host.

Files:

- `index.html` — main page
- `styles.css` — styles
- `scripts.js` — loads `projects.json` and injects project cards
- `projects.json` — sample project list

Quick preview (open locally):

If you just want to preview, open `index.html` in your browser. For a better local preview (no CORS issues) run a simple static server. In PowerShell you can run:

```powershell
# from C:\Users\loren\Website
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Deploy to GitHub Pages (two common options):

1) User/Organization site (recommended for a single-page portfolio):

- Create a repo named `lori28167.github.io` on GitHub and push the contents of this folder to the `main` branch.

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/lori28167/lori28167.github.io.git
git push -u origin main
```

2) Project site using `gh-pages` branch (works for any repo name):

- Use the `gh-pages` branch or GitHub Actions to build/publish from `main`. A quick manual approach:

```powershell
git init
git add .
git commit -m "Initial site"
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main
# Then in the repo settings enable Pages to use the main branch / root
```

Next steps / customization ideas:

- Replace the placeholder text with your bio.
- Update `projects.json` with your real projects and links.
- Add images (create an `assets/` folder) and adjust the layout.
- Add analytics, contact form, or a résumé download link.
