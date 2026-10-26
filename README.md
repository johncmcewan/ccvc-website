# Cape Cod Village Club website

Static site for Cape Cod Village Club, Inc. (Hague, NY). No build step: Vercel serves the files as-is.

- `index.html` — all pages (Home, `#history`, `#documents`, `#map`, `#renters`), switched by the URL hash
- `css/site.css`, `js/site.js` — styles and scripts
- `images/`, `images/history/`, `images/documents/` — photography and archival documents
- `docs/` — club policy PDFs

The renter form posts to the club's Google Apps Script backend (renter log Sheet, Drive, email). The backend is not part of this repository.
