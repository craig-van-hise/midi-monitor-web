
**Product Context:** MIDI Monitor (Web Edition)
**Current State:** A fully styled, functional React + Vite + TypeScript application exported from AI Studio. 

### 1. Surgical Logic Implementation (`App.tsx` or relevant component)
Locate the existing UI shells for the Settings and Info modals and implement the following specific logic. **Do not alter any existing Tailwind classes, CSS, or layout structures.**

* **Feature A: CSV Export Logic**
  * Find the existing "Export Log (CSV)" button within the Settings modal UI.
  * Write the TypeScript function to handle the export:
    * Access the current state array holding the MIDI ledger data.
    * Map the data into a valid CSV string with the headers: `CH, TYPE, DATA 1, DATA 2, TIME (Δ)`.
    * Generate a `Blob` from the CSV string (`type: 'text/csv;charset=utf-8;'`).
    * Create a temporary hidden `<a>` element to trigger an automatic browser download.
    * Name the downloaded file `midi-log.csv`.
  * Bind this function to the button's `onClick` handler.

* **Feature B: Info Modal Content**
  * Locate the Info modal component/state.
  * Replace the placeholder text with the following hardcoded values:
    * **Title:** "MIDI MONITOR"
    * **Version:** "v1.0.0"
    * **Byline:** "Created by Craig Van Hise"
  * Add standard anchor tags (`<a href="..." target="_blank" rel="noreferrer">`) for the following links:
    * **Website:** `https://www.virtualvirgin.net/`
    * **GitHub:** `https://github.com/craig-van-hise`

### 2. CI/CD Pipeline Setup
* Generate the standard GitHub Actions YAML file (`.github/workflows/deploy.yml`) required to build and deploy this Vite/React app to GitHub Pages.
* Ensure the workflow is triggered on pushes to the `main` branch.
* Use the standard Node setup, `npm ci`, `npm run build`, and the official GitHub Pages deployment actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`).