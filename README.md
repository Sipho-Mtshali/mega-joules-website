# Mega Joules – Professional Cleaning & Property Maintenance Website

A fully responsive, premium corporate website for Mega Joules Cleaning & Property Maintenance Services. Built with HTML, CSS, and JavaScript – no frameworks required.

## 📂 Project Structure
mega-joules-website/
├── index.html # Main HTML structure
├── style.css # All styles (variables, layout, animations)
├── script.js # All interactivity (modals, sliders, counters, navigation)
└── README.md # This file

## 🚀 Getting Started

1. Clone or download this repository.
2. Open the folder in Visual Studio Code (or any editor).
3. Open `index.html` in your browser (recommended: use Live Server extension for hot reload).
4. Customise content as described below.

## 🎨 Customisation Guide

### Logo
- Replace the `<img>` inside the `<nav class="navbar">` and `<footer>` with your own logo.
- The logo uses a placeholder from `ui-avatars.com`; just change the `src` attribute.

### Images
All images are placeholders from Unsplash. Replace every `<img src="...">` with your own high‑quality photos.
- Hero background image: `.hero-bg .hero-image` (inline background in CSS)
- About section: `#aboutImg`
- Health & Safety: `.health-img` inside each `.health-item`
- Blog: `.blog-img` and images inside `.blog-full`
- Portfolio: portfolio images are generated from `portfolioData` in `script.js`; update the URLs there.
- Testimonials: update the client photos in the HTML.
- Trusted By: replace the placeholder avatars with real company logos.

### Contact Details
- Phone numbers: search for `069 393 9220` and replace with your own.
- Email: `megajoulescleaning@gmail.com` – change in the contact section and footer.
- Address: update in the contact info and Google Maps embed.

### Contact Form
- The form uses Formspree (free). Change the `action` attribute in the `<form>` to your own Formspree endpoint.
- For other backends (EmailJS, PHP, etc.), modify the `fetch` URL in the `submit` handler.

### Colors & Branding
- The primary colour palette is defined in `:root` inside `style.css`. Adjust `--navy`, `--royal`, `--sky`, etc. to match your brand.

## 🧩 Features

- ully responsive – mobile‑first, works on all screen sizes.
- ticky navigation with smooth scroll and active link highlighting.
- nimated counters(projects, clients, years, team members) – triggered on scroll.
- Service cards with "Learn More" modals containing detailed descriptions and benefits.
- Quote modal – collects name, email, phone, service, and message; shows a thank‑you screen on submit.
- areer application modal – similar to quote, with position selection.
- Expandable blog cards – click "Read More" to reveal full article with image.
- Portfolio gallery – filterable by category.
- estimonial slider (Swiper) with autoplay.
- rusted By logos with hover effects.
- ealth & Safety cards with images and icons.
- AQ accordion.
- Google Maps embed.
- Cookie consent banner.
- Floating WhatsApp button and Back‑to‑Top button.
- Contact form with validation and submission handling.

## 📦 Dependencies
The site uses CDN links for:
- Google Fonts (Inter, Space Grotesk)
- Font Awesome 6
- Swiper.js (testimonials slider)
- AOS (scroll animations)

No local installation is required – everything is loaded from CDN.

## 🌐 Deployment
You can deploy this website on any static hosting service:
- **Netlify** / **Vercel** – just drag and drop the folder.
- **GitHub Pages** – push to a repository and enable Pages.
- **Any web server** – upload the three files.

## 📬 Support

For questions or custom development, contact us at megajoulescleaning@gmail.com.

Built with ❤️ by the Mega Joules team.
"# mega-joules-website" 
