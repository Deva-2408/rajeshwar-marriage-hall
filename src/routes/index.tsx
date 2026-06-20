import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajeshwar Marriage Hall - Bihta, Bihar" },
      { name: "description", content: "Rajeshwar Marriage Hall - Premier wedding venue in Bihta, Bihar, India" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    "Hall Interior — Main Hall",
    "Stage Setup — Wedding",
    "Dining Area Setup",
    "Entrance Gate",
    "Decorative Lighting",
    "Bridal Room",
    "Outdoor Lawn",
    "Reception Setup",
    "Hall Exterior / Building",
  ];

  useEffect(() => {
    // Mobile menu toggle
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    const allNavLinks = document.querySelectorAll(".navbar-menu a");
    const navTextLinks = document.querySelectorAll(".navbar-menu a:not(.btn-book-now)");
    const navbar = document.getElementById("navbar");

    function toggleMenu() {
      navbarMenu?.classList.toggle("active");
      const icon = navbarToggle?.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    }

    function closeMenu() {
      navbarMenu?.classList.remove("active");
      const icon = navbarToggle?.querySelector("i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    }

    function handleScroll() {
      // Navbar shadow on scroll
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }

      // Active link highlighting
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });

      navTextLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    }

    navbarToggle?.addEventListener("click", toggleMenu);
    allNavLinks.forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("scroll", handleScroll);

    return () => {
      navbarToggle?.removeEventListener("click", toggleMenu);
      allNavLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --primary: #8B0000;
          --accent: #C9A84C;
          --background: #FFFDF7;
          --text: #1A1A1A;
          --light-text: #5A5A5A;
          --white: #FFFFFF;
          --font-heading: 'Playfair Display', serif;
          --font-body: 'Poppins', sans-serif;
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;
          --radius-xl: 16px;
          --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
          --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
          --transition-fast: 0.15s ease;
          --transition-normal: 0.3s ease;
          --transition-slow: 0.5s ease;
        }

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }

        body {
          font-family: var(--font-body);
          color: var(--text);
          background-color: var(--background);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text);
        }

        a {
          text-decoration: none;
          color: inherit;
          transition: color var(--transition-fast);
        }

        ul, ol { list-style: none; }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        button {
          font-family: var(--font-body);
          cursor: pointer;
          border: none;
          background: none;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section { padding: 4rem 0; }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--light-text);
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .gold-accent { color: var(--accent); }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--primary);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }

        .navbar.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .navbar .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .navbar-brand {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .navbar-brand-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.5px;
        }

        .navbar-brand-sub {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--white);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .navbar-toggle {
          display: block;
          font-size: 1.5rem;
          color: var(--white);
          padding: 0.5rem;
        }

        .navbar-menu {
          position: fixed;
          top: 70px;
          left: 0;
          width: 100%;
          background-color: var(--primary);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .navbar-menu.active { max-height: 450px; }

        .navbar-menu ul {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 0;
        }

        .navbar-menu a {
          display: block;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--white);
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast);
        }

        .navbar-menu a:hover,
        .navbar-menu a.active { color: var(--accent); }

        .navbar-menu a.active { font-weight: 600; }

        .btn-book-now {
          display: inline-block;
          padding: 0.6rem 1.4rem;
          background-color: var(--accent);
          color: var(--primary) !important;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-md);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
          text-align: center;
          margin-top: 0.5rem;
        }

        .btn-book-now:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(201, 168, 76, 0.35);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 70px;
          position: relative;
          background-color: #2C0A0A;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(139, 0, 0, 0.85) 0%,
            rgba(139, 0, 0, 0.75) 50%,
            rgba(139, 0, 0, 0.85) 100%
          );
          z-index: 1;
        }

        .hero .container {
          position: relative;
          z-index: 2;
        }

        .hero-welcome {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 0.75rem;
        }

        .hero-heading {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        .hero-hindi {
          font-family: var(--font-body);
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 0.5rem;
          opacity: 0.95;
        }

        .hero-tagline {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 400;
          font-style: italic;
          color: var(--accent);
          margin-bottom: 1.25rem;
        }

        .hero-location {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 1.75rem;
        }

        .hero-location i {
          color: var(--accent);
          font-size: 0.9rem;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: var(--radius-lg);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
          min-width: 180px;
        }

        .hero-btn:hover { transform: translateY(-2px); }

        .hero-btn-primary {
          background-color: var(--accent);
          color: var(--primary);
        }

        .hero-btn-primary:hover {
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.4);
        }

        .hero-btn-secondary {
          background-color: transparent;
          color: var(--white);
          border: 2px solid var(--white);
        }

        .hero-btn-secondary:hover {
          background-color: var(--white);
          color: var(--primary);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
        }

        .hero-scroll {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .hero-scroll span {
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hero-scroll i {
          font-size: 1.1rem;
          color: var(--accent);
          animation: bounceDown 2s ease-in-out infinite;
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }

        #about { background-color: var(--white); }
        #facilities { background-color: var(--background); }
        #events { background-color: var(--primary); }
        #services { background-color: var(--white); }
        #gallery { background-color: #FFFDF7; }
        #testimonials { background-color: var(--background); }
        #faq { background-color: var(--white); }
        #contact { background-color: var(--background); }

        .footer {
          background-color: var(--primary);
          color: var(--white);
          padding: 3rem 0 1.5rem;
        }

        .footer a {
          color: rgba(255, 255, 255, 0.8);
        }

        .footer a:hover { color: var(--accent); }

        /* About Section */
        .about-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .about-divider {
          width: 60px;
          height: 3px;
          background-color: var(--accent);
          margin: 0.75rem auto 1rem;
          border-radius: 2px;
        }

        .about-hindi {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--accent);
          letter-spacing: 1px;
        }

        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .about-image-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          border: 2px solid var(--accent);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #FDF8F0;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--light-text);
        }

        .about-content h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .about-content p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .about-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .about-owner {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--accent);
          background-color: rgba(201, 168, 76, 0.08);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
        }

        .about-owner i { font-size: 0.85rem; }

        .about-established {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent);
          border: 1.5px solid var(--accent);
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-md);
          letter-spacing: 0.5px;
        }

        /* Facilities Section */
        .facilities-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .facility-card {
          background-color: var(--white);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .facility-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          border-color: var(--accent);
        }

        .facility-icon {
          font-size: 1.75rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .facility-name {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.35rem;
        }

        .facility-desc {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--light-text);
          line-height: 1.5;
        }

        /* Events Section */
        .events-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .events-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--white);
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .event-card {
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(201, 168, 76, 0.2);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1rem;
          text-align: center;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .event-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
        }

        .event-icon {
          font-size: 1.75rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .event-name {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.35rem;
        }

        .event-hindi {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .events-capacity {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--accent);
          text-align: center;
          line-height: 1.6;
        }

        /* Services Section */
        .services-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .service-card {
          background-color: var(--white);
          border-top: 3px solid var(--accent);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.25rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .service-icon {
          font-size: 1.75rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .service-title {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.5rem;
        }

        .service-title-hindi {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .service-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--light-text);
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .container { padding: 0 1.5rem; }
          .section { padding: 5rem 0; }
          .section-title { font-size: 2.5rem; }

          .navbar-toggle { display: none; }

          .navbar-menu {
            position: static;
            max-height: none;
            overflow: visible;
            box-shadow: none;
            background: transparent;
            width: auto;
          }

          .navbar-menu ul {
            flex-direction: row;
            align-items: center;
            padding: 0;
            gap: 0.25rem;
          }

          .navbar-menu a {
            padding: 0.5rem 0.85rem;
            font-size: 0.85rem;
          }

          .navbar-menu a:hover,
          .navbar-menu a.active {
            color: var(--accent);
            background-color: transparent;
          }

          .btn-book-now {
            margin-top: 0;
            margin-left: 0.5rem;
          }

          .hero-welcome {
            font-size: 0.85rem;
            letter-spacing: 4px;
          }

          .hero-heading { font-size: 3.25rem; }
          .hero-hindi { font-size: 1.35rem; }
          .hero-tagline { font-size: 1.2rem; }
          .hero-location { font-size: 0.9rem; }

          .hero-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
          }

          .hero-btn {
            padding: 0.95rem 2.25rem;
            font-size: 0.95rem;
            min-width: 200px;
          }

          .about-grid {
            flex-direction: row;
            align-items: stretch;
            gap: 3rem;
          }

          .about-image-placeholder,
          .about-content {
            flex: 1;
          }

          .about-content h3 { font-size: 1.75rem; }
          .about-content p { font-size: 1rem; }

          .facilities-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .facility-card { padding: 2rem 1.25rem; }
          .facility-icon { font-size: 2rem; }
          .facility-name { font-size: 1.05rem; }
          .facility-desc { font-size: 0.85rem; }

          .events-grid { grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
          .event-card { padding: 2rem 1.25rem; }
          .event-icon { font-size: 2rem; }
          .event-name { font-size: 1.05rem; }
          .event-hindi { font-size: 0.85rem; }
          .events-capacity { font-size: 1rem; }
          .services-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
          .service-card { padding: 2rem 1.25rem; }
          .service-icon { font-size: 2rem; }
          .service-title { font-size: 1.05rem; }
          .service-desc { font-size: 0.9rem; }
        }

        @media (min-width: 1024px) {
          .container { padding: 0 2rem; }
          .section { padding: 6rem 0; }
          .section-title { font-size: 3rem; }

          .navbar .container { height: 80px; }
          .navbar-brand-name { font-size: 1.6rem; }
          .navbar-brand-sub { font-size: 0.75rem; }

          .navbar-menu a {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .btn-book-now {
            padding: 0.65rem 1.6rem;
            font-size: 0.9rem;
            margin-left: 0.75rem;
          }

          .hero { padding-top: 80px; }

          .hero-welcome {
            font-size: 0.9rem;
            letter-spacing: 5px;
          }

          .hero-heading { font-size: 4rem; }
          .hero-hindi { font-size: 1.5rem; }
          .hero-tagline { font-size: 1.35rem; }

          .hero-scroll { bottom: 2rem; }

          .about-grid { gap: 4rem; }
          .about-content h3 { font-size: 2rem; }
          .about-content p { font-size: 1.05rem; }

          .facilities-grid { gap: 2rem; }
          .facility-card { padding: 2.25rem 1.5rem; }
          .facility-icon { font-size: 2.25rem; }
          .facility-name { font-size: 1.1rem; }
          .facility-desc { font-size: 0.9rem; }

          .events-grid { gap: 2rem; }
          .event-card { padding: 2.25rem 1.5rem; }
          .event-icon { font-size: 2.25rem; }
          .event-name { font-size: 1.1rem; }
          .event-hindi { font-size: 0.9rem; }
          .events-capacity { font-size: 1.05rem; }
          .services-grid { gap: 2rem; }
          .service-card { padding: 2.25rem 1.5rem; }
          .service-icon { font-size: 2.25rem; }
          .service-title { font-size: 1.1rem; }
          .service-desc { font-size: 0.95rem; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="container">
          <a href="#home" className="navbar-brand">
            <span className="navbar-brand-name">Rajeshwar</span>
            <span className="navbar-brand-sub">Marriage Hall</span>
          </a>
          <button className="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation menu">
            <i className="fas fa-bars"></i>
          </button>
          <div className="navbar-menu" id="navbarMenu">
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact" className="btn-book-now">Book Now</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <p className="hero-welcome">Welcome to</p>
          <h1 className="hero-heading">Rajeshwar Marriage Hall</h1>
          <p className="hero-hindi">जहाँ हर जश्न एक याद बन जाता है</p>
          <p className="hero-tagline">Where Every Celebration Becomes a Memory</p>
          <p className="hero-location">
            <i className="fas fa-map-marker-alt"></i>
            Bishunpura South Side, Near Bajrangbali Mandir, Bihta, Bihar
          </p>
          <div className="hero-buttons">
            <a href="tel:+916207928461" className="hero-btn hero-btn-primary">
              <i className="fas fa-phone"></i> Call Now
            </a>
            <a href="https://wa.me/916207928461" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-secondary">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll down">
          <span>Scroll</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </section>

      {/* About Section — Rajeshwar Marriage Hall */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-wrapper">
            <h2 className="section-title">About Us</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">हमारे बारे में</p>
          </div>
          <div className="about-grid">
            <div className="about-image-placeholder">
              <span>Hall Photo</span>
            </div>
            <div className="about-content">
              <h3>Bihta's Premier Wedding Venue</h3>
              <p>
                Rajeshwar Marriage Hall is a proud landmark in Bihta, Bihar. Established on 15th December 2024, our hall was built with one dream — to give every family in Bihta and nearby villages a truly royal venue to celebrate their most precious moments.
              </p>
              <p>
                With a glorious elevation design and royal look that stands apart from any other hall in the region, Rajeshwar Marriage Hall offers a premium experience at an affordable price. From weddings to receptions, engagements to birthday celebrations — every event here becomes a lifelong memory.
              </p>
              <div className="about-meta">
                <span className="about-owner">
                  <i className="fas fa-user-tie"></i> Proprietor: Pintu Kumar Singh
                </span>
                <span className="about-established">Est. 15 Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section" id="facilities">
        <div className="container">
          <div className="facilities-wrapper">
            <h2 className="section-title">Our Facilities</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">हमारी सुविधाएँ</p>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-snowflake"></i></div>
              <div className="facility-name">Air Conditioned Hall</div>
              <div className="facility-desc">मुख्य हॉल में AC</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-bolt"></i></div>
              <div className="facility-name">24/7 Generator Backup</div>
              <div className="facility-desc">24 घंटे जनरेटर बैकअप</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-car"></i></div>
              <div className="facility-name">Free Parking</div>
              <div className="facility-desc">मुफ़्त पार्किंग सुविधा</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-lightbulb"></i></div>
              <div className="facility-name">Decorative Lighting</div>
              <div className="facility-desc">सजावटी रोशनी</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-utensils"></i></div>
              <div className="facility-name">In-House Catering</div>
              <div className="facility-desc">इन-हाउस कैटरिंग</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-paint-brush"></i></div>
              <div className="facility-name">Decoration Services</div>
              <div className="facility-desc">सजावट सेवाएँ</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-music"></i></div>
              <div className="facility-name">Sound System Available</div>
              <div className="facility-desc">साउंड सिस्टम उपलब्ध</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-person-dress"></i></div>
              <div className="facility-name">Bridal Room</div>
              <div className="facility-desc">दुल्हन के लिए विशेष कक्ष</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-restroom"></i></div>
              <div className="facility-name">Separate Washrooms</div>
              <div className="facility-desc">अलग शौचालय सुविधा</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-water"></i></div>
              <div className="facility-name">Drinking Water</div>
              <div className="facility-desc">पीने का पानी उपलब्ध</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-tree"></i></div>
              <div className="facility-name">Lawn Area</div>
              <div className="facility-desc">लॉन क्षेत्र उपलब्ध</div>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><i className="fas fa-door-open"></i></div>
              <div className="facility-name">Grand Entrance Gate</div>
              <div className="facility-desc">भव्य प्रवेश द्वार</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section" id="events">
        <div className="container">
          <div className="events-wrapper">
            <h2 className="events-title">Events We Host</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">हम किन आयोजनों के लिए उपलब्ध हैं</p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-icon"><i className="fas fa-heart"></i></div>
              <div className="event-name">Shaadi / Wedding</div>
              <div className="event-hindi">शादी</div>
            </div>
            <div className="event-card">
              <div className="event-icon"><i className="fas fa-champagne-glasses"></i></div>
              <div className="event-name">Reception</div>
              <div className="event-hindi">रिसेप्शन</div>
            </div>
            <div className="event-card">
              <div className="event-icon"><i className="fas fa-ring"></i></div>
              <div className="event-name">Engagement</div>
              <div className="event-hindi">सगाई</div>
            </div>
            <div className="event-card">
              <div className="event-icon"><i className="fas fa-cake-candles"></i></div>
              <div className="event-name">Birthday Party</div>
              <div className="event-hindi">जन्मदिन</div>
            </div>
          </div>
          <p className="events-capacity">
            Main Hall: ~100 Guests (Wedding Setup) | Dining Area: ~200 Guests | Lawn: 20-50 Guests
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="services-wrapper">
            <h2 className="section-title">Our Services</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">हमारी सेवाएँ</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-utensils"></i></div>
              <div className="service-title">In-House Catering</div>
              <div className="service-title-hindi">इन-हाउस कैटरिंग</div>
              <div className="service-desc">Delicious food prepared fresh for your guests. Outside caterers also welcome.</div>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-wand-sparkles"></i></div>
              <div className="service-title">Decoration Services</div>
              <div className="service-title-hindi">सजावट सेवाएँ</div>
              <div className="service-desc">Beautiful hall decoration for every occasion. Bring your own decorator if you prefer.</div>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-music"></i></div>
              <div className="service-title">Sound System</div>
              <div className="service-title-hindi">साउंड सिस्टम</div>
              <div className="service-desc">In-house sound system available. Outside DJ and sound arrangements also permitted.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" id="gallery">
        <div className="container">
          {/* Gallery content will go here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" id="testimonials">
        <div className="container">
          {/* Testimonials content will go here */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="container">
          {/* FAQ content will go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          {/* Contact content will go here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          {/* Footer content will go here */}
        </div>
      </footer>
    </>
  );
}
