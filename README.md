# Cape Cod Village Club website

Static site for Cape Cod Village Club, Inc. (Hague, NY). No build step: Vercel serves the files as-is.

- `index.html` — main pages (Home, `#history`, `#documents`, `#map`), switched by the URL hash
- `register-8zo24q/` — the renter registration form, at an unlisted address (noindex) that homeowners share privately; `/renters/` and `#renters` redirect to the Renter Guide
- `renter-guide/` — public renter guide (for guests who have already booked with a homeowner)
- `css/site.css`, `js/site.js` — shared styles, menu and page switching; `css/renters.css`, `js/renters.js` — the form
- `images/`, `images/history/`, `images/documents/` — photography and archival documents
- `docs/` — club policy PDFs

The renter form posts to the club's Google Apps Script backend (renter log Sheet, Drive, email) and reads its JSON replies; it only reports success on `ok: true`. The house list shows addresses only; homeowner names and emails stay in the private Sheet. The backend is not part of this repository.
