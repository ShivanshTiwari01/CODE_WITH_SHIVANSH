# Shivansh Tiwari – Full Stack Architect Portfolio

Welcome to my interactive, modern portfolio! This project showcases my work, skills, and experience as a software engineer and full stack architect.

## Features

- **Animated Hero Section** with particles, gradients, and smooth entrance effects
- **Modern, Responsive UI** built with Next.js, Tailwind CSS, and Framer Motion
- **Tech Stack Section** with animated icons
- **Projects Showcase** with interactive cards
- **Contact & About Sections**
- **Dark/Light Theme Toggle**
- **User Tracking & Analytics** (IP, Location, User-Agent logging with Neon Serverless Postgres & IP Geolocation API)

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [tsParticles](https://particles.js.org/)
- [Neon Serverless Postgres](https://neon.tech/)
- [IP Geolocation](https://ipgeolocation.io/)

## Getting Started

1. **Set up Environment Variables:**
   Create a `.env.local` or `.env` file with the following keys:
   ```sh
   DATABASE_URL=your_neon_postgres_url
   IPGEOLOCATION_API_KEY=your_api_key
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/components/` – UI components (HeroSection, AboutSection, ProjectsSection, etc.)
- `src/app/` – App entry, global styles, and context
- `public/` – Static assets (images, icons)

## Customization

- Update your profile image in `public/my_image.jpg`.
- Edit content in the respective section components.
- Tweak styles in `globals.css` or Tailwind config.

## License

MIT

---

> Designed and developed by Shivansh Tiwari. Inspired by modern web trends and best practices.
