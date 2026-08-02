# Anshu Sahu Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This project showcases my background, technical skills, projects, certifications, achievements, career journey, and contact details in a polished single-page experience.

## Overview

This portfolio is designed to present a professional online presence for a software engineering student and aspiring full-stack developer. It includes smooth animations, a clean dark theme, and sections for key professional highlights.

## Features

- Responsive one-page portfolio layout
- Smooth animations and transitions with Framer Motion
- Dark-themed modern UI with Tailwind CSS
- Scroll progress indicator and back-to-top button
- Sections for:
  - Hero
  - About
  - Skills
  - Projects
  - Certificates
  - Achievements
  - Journey
  - Contact
- Downloadable resume from the homepage

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- React Icons
- React Router DOM

## Project Structure

```bash
src/
  App.jsx
  main.jsx
  index.css
  components/
    About.jsx
    Achievements.jsx
    Certificates.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Journey.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
  assets/
  hooks/
  pages/
  utils/
public/
  resume.pdf
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

```bash
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Then open your browser and visit:

```bash
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Customization

You can personalize the portfolio by editing the content in the components inside the `src/components` folder and updating the resume file in the `public` directory.

## Deployment

This project can be deployed easily on platforms such as:

- Vercel
- Netlify
- GitHub Pages

Because it is a Vite app, the production build output is generated in the `dist` folder.

## License

This project is for personal portfolio use.
