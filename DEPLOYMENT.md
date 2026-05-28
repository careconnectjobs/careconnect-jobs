# CareConnect Jobs - Deployment

Diese Website ist als statische Website vorbereitet. Es gibt keine Datenbank, kein Login und keinen Serverzwang.

## Projektstruktur

```text
.
├── index.html
├── impressum.html
├── datenschutz.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── careconnect-logo.png
│   ├── script.js
│   └── styles.css
├── netlify.toml
├── vercel.json
├── package.json
└── server.js
```

## Lokal testen

```bash
npm start
```

Dann im Browser öffnen:

```text
http://localhost:3000
```

Alternativ kann `index.html` direkt im Browser geöffnet werden.

## SEO und Domain-Vorbereitung

- Hauptdomain: `https://careconnect-jobs.de`
- www-Variante: `https://www.careconnect-jobs.de`
- Canonical URL der Startseite: `https://careconnect-jobs.de/`
- Sitemap: `https://careconnect-jobs.de/sitemap.xml`
- Robots-Datei: `https://careconnect-jobs.de/robots.txt`
- Kontakt-Mail: `mailto:info@careconnect-jobs.de`

Empfehlung: `careconnect-jobs.de` als Hauptdomain verwenden und `www.careconnect-jobs.de` per 301-Weiterleitung auf die Hauptdomain leiten.

## Option A: GitHub Pages ohne Vercel oder Netlify

Da diese Website nur aus statischen Dateien besteht, kannst du sie direkt über GitHub Pages hosten. Dann brauchst du für den Start weder Vercel noch Netlify.

Rollenverteilung:

- IONOS bleibt Registrar für die Domain und Anbieter deiner E-Mail-Adresse.
- GitHub speichert den Website-Code.
- GitHub Pages veröffentlicht die Website im Internet.

Schritte:

1. In GitHub ein neues Repository erstellen, zum Beispiel `careconnect-jobs`.
2. Alle Dateien aus diesem Projektordner in das Repository hochladen.
3. In GitHub im Repository auf Settings > Pages gehen.
4. Unter Build and deployment als Source `Deploy from a branch` wählen.
5. Branch `main` und Ordner `/root` auswählen.
6. Speichern.
7. Unter Custom domain `careconnect-jobs.de` eintragen und speichern.
8. Warten, bis GitHub Pages die Seite veröffentlicht.
9. Wenn verfügbar, `Enforce HTTPS` aktivieren.

Die Datei `CNAME` ist bereits im Projekt enthalten und enthält `careconnect-jobs.de`. Das hilft GitHub Pages, die Custom Domain dauerhaft zu behalten.

### DNS bei IONOS für GitHub Pages

In IONOS unter Domains & SSL > careconnect-jobs.de > DNS:

| Typ | Hostname | Wert |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<dein-github-name>.github.io` |

Optional für IPv6:

| Typ | Hostname | Wert |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

`<dein-github-name>.github.io` ersetzt du durch deinen GitHub-Benutzernamen, zum Beispiel `maxmuster.github.io`.

Wenn `careconnect-jobs.de` in GitHub Pages als Custom Domain eingetragen ist und `www` korrekt als CNAME gesetzt ist, leitet GitHub Pages `www.careconnect-jobs.de` automatisch auf `careconnect-jobs.de` weiter.

## Option B: Vercel

Vercel ist für diese statische Landingpage sehr unkompliziert.

1. Bei Vercel einloggen.
2. Neues Projekt erstellen.
3. Diesen Projektordner importieren oder als Git-Repository verbinden.
4. Framework Preset: `Other`.
5. Build Command leer lassen.
6. Output Directory leer lassen oder `.` verwenden.
7. Deploy starten.
8. In Vercel unter Project Settings > Domains beide Domains hinzufügen:
   - `careconnect-jobs.de`
   - `www.careconnect-jobs.de`
9. In Vercel `careconnect-jobs.de` als Hauptdomain setzen.
10. Für `www.careconnect-jobs.de` eine Weiterleitung auf `careconnect-jobs.de` einrichten.
11. SSL/HTTPS wird nach korrekter DNS-Konfiguration automatisch bereitgestellt.

### DNS bei IONOS für Vercel

In IONOS unter Domains & SSL > careconnect-jobs.de > DNS:

| Typ | Hostname | Wert |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns-0.com` |

Hinweis: Vercel kann im Dashboard projektspezifische Werte anzeigen. Falls Vercel andere DNS-Werte nennt, immer die Werte aus Vercel verwenden.

## Alternative: Netlify

Netlify ist ebenfalls gut geeignet. Wenn du die DNS-Verwaltung bei IONOS behalten willst, ist die Hauptdomain `careconnect-jobs.de` weiterhin möglich. Netlify empfiehlt bei externem DNS aber oft `www` als primäre Domain, weil Subdomains per CNAME technisch flexibler sind. Für dieses Projekt bleibt die vorbereitete SEO-Variante trotzdem: Hauptdomain ohne `www`.

1. Bei Netlify einloggen.
2. Neue Site erstellen.
3. Diesen Projektordner importieren oder als Git-Repository verbinden.
4. Build Command leer lassen.
5. Publish Directory: `.`
6. Deploy starten.
7. Unter Domain management beide Domains hinzufügen:
   - `careconnect-jobs.de`
   - `www.careconnect-jobs.de`
8. `careconnect-jobs.de` als Primary domain setzen.
9. Netlify leitet Domain-Aliasse normalerweise zur Primary Domain weiter. Zusätzlich ist in `netlify.toml` eine Weiterleitung von `www` auf die Hauptdomain vorbereitet.
10. Unter Domain management > HTTPS das Netlify-managed certificate prüfen. HTTPS wird nach korrekter DNS-Konfiguration automatisch per Let's Encrypt bereitgestellt.

### DNS bei IONOS für Netlify

In IONOS unter Domains & SSL > careconnect-jobs.de > DNS:

| Typ | Hostname | Wert |
| --- | --- | --- |
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `<dein-netlify-name>.netlify.app` |

`<dein-netlify-name>.netlify.app` ist die temporäre Netlify-Adresse deiner Site, zum Beispiel `careconnect-jobs.netlify.app`. Genau diesen Namen zeigt Netlify im Site-Dashboard.

## IONOS-Hinweise

- Für die Hauptdomain bei IONOS als Hostname `@` eintragen oder das Hostname-Feld leer lassen.
- Für `www.careconnect-jobs.de` nur `www` als Hostname eintragen, nicht die komplette Domain.
- Alte A-, AAAA- oder CNAME-Einträge löschen oder ersetzen, wenn sie auf ein anderes Hosting zeigen.
- DNS-Änderungen können einige Minuten bis 48 Stunden brauchen.
- HTTPS erst final prüfen, wenn die DNS-Einträge beim Hosting als korrekt erkannt werden.

## Social Links später ersetzen

Im Footer sind TikTok, Instagram und YouTube aktuell Platzhalter. Sobald die Profile existieren, in `index.html` die `href="#"` Werte durch die echten URLs ersetzen und `data-placeholder-link` entfernen.
