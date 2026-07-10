# Shahriar Ahmed Seam - Professional Portfolio & CV

A responsive, high-performance, and feature-rich professional portfolio website built using **Next.js 15**, **React**, and **TypeScript**. Inspired by premium developer portfolios, this website features interactive animations, a custom light/dark theme switch, a centralized data-driven structure, and a built-in inline CV modal viewer.

Live Repository: [github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV](https://github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV)

---

## ✨ Features

- **🌓 Dual-Theme System (GitHub Style):**
  - Seamlessly toggle between a premium Cream Plaster Light theme and a GitHub-style Dark theme (`#0d1117` background, `#161b22` cards, and `#30363d` borders) highlighted with custom profile-matching crimson accents.
  - Automatically respects user preference and caches choices in `localStorage` to avoid flash-of-unstyled-content (FOUC).
- **📋 Single Source of Truth (`src/data/portfolioData.ts`):**
  - Change all names, descriptions, social handles, links, projects, work experiences, skills, education history, and achievements in one single TypeScript file.
- **📄 Interactive Inline PDF CV Modal Viewer:**
  - View the CV directly inside an interactive, responsive floating browser window.
  - Seamlessly falls back to opening in a new tab on mobile viewports for optimized UX.
- **🌟 Balanced Skills Columns:**
  - Categorized two-column grid layout where each skill tag includes its corresponding brand logo icon.
- **📈 Project Metrics & Repository Links:**
  - Custom star, accuracy, and MAU stats embedded directly inside project cards.
- **✍️ Uniform Blogs Section:**
  - Sleek card layout featuring dynamic expanding circular corner-hover animations.
- **🚀 Scroll Reveal slide-in animations:**
  - Custom `IntersectionObserver` script driving smooth slide-ins and fades when sections enter the viewport.
- **📁 LaTeX Source Backup (`cv.tex`):**
  - Project includes a backup of the LaTeX source code for the Curriculum Vitae at the root directory (`/cv.tex`).

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (custom theme custom properties)
- **Icons:** FontAwesome CDN
- **Animations:** CSS Keyframes & Intersection Observer API

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18.x or later) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV.git
   cd Shahriar-Ahmed-Seam-Portfolio-CV
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

4. **Compile production build:**
   ```bash
   npm run build
   ```

---

## ✍️ Customizing Data

To update the portfolio with your own details:
1. Open [src/data/portfolioData.ts](src/data/portfolioData.ts).
2. Edit fields such as `fullName`, `professionalLine`, `aboutMe`, `experiences`, `projects`, `skills`, `education`, and `achievements`.
3. To update pictures, drop your files (e.g. `me.png`, `buet_logo.png`, `ndc_logo.png`) inside the `public/` directory and update the corresponding path string in `portfolioData.ts`.
