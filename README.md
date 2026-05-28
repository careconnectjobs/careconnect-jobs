# CareConnect Jobs Landingpage

Statische Landingpage fuer `careconnect-jobs.de`.

## Lokal starten

```bash
npm start
```

Danach ist die Seite unter `http://localhost:3000` erreichbar.

Alternativ kann die Datei `index.html` direkt im Browser geoeffnet werden.
Nach dem Deployment ist die geplante Adresse `https://careconnect-jobs.de`.

## Livegang

Die Website ist fuer Vercel und Netlify vorbereitet:

- `CNAME` und `.nojekyll` fuer GitHub Pages
- `vercel.json` fuer Vercel
- `netlify.toml` fuer Netlify
- `robots.txt` und `sitemap.xml` fuer SEO
- `DEPLOYMENT.md` mit IONOS-DNS-Anleitung

## Deployment

Die Seite kann als statische Website deployed werden. Details stehen in `DEPLOYMENT.md`. Relevante Dateien:

- `index.html`
- `impressum.html`
- `datenschutz.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `assets/styles.css`
- `assets/script.js`
- `assets/careconnect-logo.png`

Die Social-Media-Links im Footer sind Platzhalter fuer TikTok, Instagram und YouTube und koennen spaeter durch echte Profil-URLs ersetzt werden.
