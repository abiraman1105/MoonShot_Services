# Moonshot Services

A premium, production-ready marketing website for **Moonshot Services** — a web development and AI solutions agency. Built with React, Vite, and plain CSS (no UI frameworks).

![Tech](https://img.shields.io/badge/React-18-38BDF8) ![Tech](https://img.shields.io/badge/Vite-5-2563EB) ![Tech](https://img.shields.io/badge/CSS-Modular-0A1930)

---

## Features

- Sticky, transparent-to-solid navbar with smooth mobile menu
- Animated hero section with a CSS-only orbit/constellation background (no images)
- Services, Why Choose Us, Process timeline, Featured Projects, Technologies grid
- Animated statistics counters (triggered on scroll)
- Testimonials, FAQ accordion, and a validated contact form
- Newsletter signup and social links in the footer
- Scroll-reveal animations throughout, with `prefers-reduced-motion` support
- Fully responsive (desktop, laptop, tablet, mobile) with no horizontal overflow
- Semantic HTML, ARIA labels, keyboard-accessible controls, and visible focus states
- SEO-ready `<head>` (meta description, Open Graph, Twitter Card tags)

---

## Tech Stack

| Layer      | Choice                          |
|------------|----------------------------------|
| Framework  | React 18                        |
| Bundler    | Vite 5                          |
| Routing    | React Router 6                  |
| Styling    | Plain modular CSS (no Tailwind/Bootstrap/MUI) |
| Fonts      | Poppins (Google Fonts)          |

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Install & Run
```bash
npm install
npm run dev
```
The site will open automatically at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
Output is generated in the `dist/` folder.

### Preview the Production Build
```bash
npm run preview
```

---

## Project Structure

```
moonshot-services/
├── index.html                  # HTML shell + SEO meta tags
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                 # App entry point
    ├── App.jsx                  # Root component + routes
    ├── App.css
    ├── index.css                 # Design tokens, resets, global utilities
    │
    ├── constants/
    │   ├── theme.js               # Color tokens & site info (email, phone, etc.)
    │   └── navLinks.js            # Navbar link list
    │
    ├── data/                     # Static content for each section
    │   ├── services.js
    │   ├── whyChooseUs.js
    │   ├── process.js
    │   ├── projects.js
    │   ├── technologies.js
    │   ├── stats.js
    │   ├── testimonials.js
    │   └── faq.js
    │
    ├── hooks/
    │   ├── useScrollPosition.js   # Tracks scroll offset (navbar, back-to-top)
    │   ├── useInView.js           # IntersectionObserver-based reveal trigger
    │   └── useCountUp.js          # Animated number counter
    │
    ├── layouts/
    │   └── MainLayout.jsx         # Navbar + page content + Footer + BackToTop
    │
    ├── pages/
    │   ├── Home.jsx               # Composes all homepage sections
    │   ├── NotFound.jsx           # 404 page
    │   └── NotFound.css
    │
    └── components/
        ├── common/
        │   ├── Reveal.jsx          # Scroll-reveal animation wrapper
        │   └── Icon.jsx            # Inline SVG icon set
        ├── Navbar/
        ├── Hero/
        ├── TrustedBy/
        ├── Services/
        ├── WhyChooseUs/
        ├── Process/
        ├── Projects/
        ├── Technologies/
        ├── Stats/
        ├── Testimonials/
        ├── FAQ/
        ├── Contact/
        ├── Footer/
        └── BackToTop/
```

Each component folder contains a `.jsx` file and a matching `.css` file scoped to that component.

---

## Customization Guide

### Add your logo
The logo is intentionally left as a placeholder. Replace it in two places:
- `src/components/Navbar/Navbar.jsx`
- `src/components/Footer/Footer.jsx`

Look for:
```jsx
{/* Moonshot Services Logo Goes Here */}
```
Swap the placeholder `<span>` for your SVG/image, keeping the surrounding flex layout intact.

### Update colors
All design tokens live in `src/index.css` under `:root`, and are mirrored in `src/constants/theme.js` for use in JS. Change the hex values in one place to restyle the whole site:
```css
--color-navy: #0A1930;
--color-blue: #2563EB;
--color-sky: #38BDF8;
```

### Edit content
Nearly all copy lives in `src/data/*.js` as plain arrays/objects — edit these files rather than the components to update services, projects, testimonials, FAQs, stats, or technologies.

### Site info (email, phone, address, WhatsApp)
Edit `SITE` in `src/constants/theme.js`.

### Contact form
`src/components/Contact/Contact.jsx` includes client-side validation but does not submit anywhere by default. Wire up `handleSubmit` to your backend, form service (e.g. Formspree), or API route of choice.

### Newsletter form
`src/components/Footer/Footer.jsx` has a placeholder newsletter form (`handleSubscribe`) — connect it to your email provider's API.

---

## Replacing Placeholder Content

Before launch, review and replace:
- Company names under **Trusted By** (`src/components/TrustedBy/TrustedBy.jsx`)
- Project entries under **Featured Projects** (`src/data/projects.js`)
- Testimonials (`src/data/testimonials.js`)
- Social links (`src/components/Footer/Footer.jsx`)
- Contact details (`src/constants/theme.js`)

---

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus outlines on all interactive elements
- ARIA attributes on the mobile menu, FAQ accordion, and form fields
- Respects `prefers-reduced-motion` for users who disable animations

---

## License

This project was generated for Moonshot Services. Use and modify freely for your own deployment.
