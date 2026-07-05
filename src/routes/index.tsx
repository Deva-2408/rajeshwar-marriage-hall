import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import rajeshwarHallAsset from "@/assets/rajeshwar-hall.jpg.asset.json";
import entranceGateAsset from "@/assets/entrance-gate.jpg.asset.json";
import hallExteriorAsset from "@/assets/hall-exterior.jpg.asset.json";
import decorativeLightingAsset from "@/assets/decorative-lighting.jpg.asset.json";
import outdoorLawnAsset from "@/assets/outdoor-lawn.jpg.asset.json";
import ReviewsDeck from "@/components/ReviewsDeck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajeshwar Marriage Hall — Wedding Venue in Bihta, Bihar" },
      {
        name: "description",
        content:
          "Affordable wedding venue in Bihta, Bihar for shaadi, reception, sagai & birthdays. AC hall, parking, catering. Call +91 62079 28461.",
      },
      {
        name: "keywords",
        content:
          "marriage hall bihta, shaadi hall bihta bihar, wedding venue bihta, banquet hall near patna, vivah bhawan bihta, rajeshwar marriage hall",
      },
      { property: "og:title", content: "Rajeshwar Marriage Hall — Wedding Venue in Bihta, Bihar" },
      {
        property: "og:description",
        content:
          "Bihta ka sabse sundar aur affordable vivah sthal. Shaadi, reception, sagai aur birthday ke liye book karein. Call: +91 62079 28461",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rajeshwar-marriage-hall.lovable.app/" },
      { property: "og:site_name", content: "Rajeshwar Marriage Hall" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rajeshwar Marriage Hall — Wedding Venue in Bihta, Bihar" },
      {
        name: "twitter:description",
        content:
          "Bihta ka sabse sundar aur affordable vivah sthal. Shaadi, reception, sagai aur birthday ke liye book karein.",
      },
    ],
    links: [{ rel: "canonical", href: "https://rajeshwar-marriage-hall.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WeddingVenue",
          name: "Rajeshwar Marriage Hall",
          telephone: "+91 62079 28461",
          url: "https://rajeshwar-marriage-hall.lovable.app/",
          image: "https://rajeshwar-marriage-hall.lovable.app/og-image.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bishunpura South Side, Near Bajrangbali Mandir",
            addressLocality: "Bihta",
            addressRegion: "Bihar",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            ["What is the hall capacity?", "Our main hall seats approximately 100 guests in wedding setup and around 200 in dining arrangement. The lawn accommodates 20-50 guests."],
            ["Is parking available?", "Yes, we offer free on-site parking for all guests."],
            ["Is catering available?", "Yes, we provide in-house catering. Outside caterers are also welcome."],
            ["Can we arrange our own decoration?", "We offer in-house decoration and also allow outside decorators."],
            ["How much advance is required to book?", "The advance booking amount depends on the type of event. Please call or WhatsApp Pintu Kumar Singh for details."],
            ["What is the cancellation policy?", "If a booking is cancelled, the advance is not refunded but can be adjusted to a new date."],
            ["Can we visit the venue before booking?", "Yes, you are welcome to visit the venue any day, any time. No appointment needed."],
            ["Is there power backup?", "Yes, we have 24/7 generator backup to ensure uninterrupted power during your event."],
            ["Is the hall air conditioned?", "Yes, the main hall is air conditioned."],
            ["What events can be hosted here?", "Weddings, receptions, engagements, birthday parties and other social events."],
          ].map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    {
      q: "Hall ki capacity kitni hai?",
      qEn: "What is the hall capacity?",
      a: "Hamare main hall mein wedding setup ke liye lagbhag 100 mehmaan baith sakte hain. Dining area mein lagbhag 200 mehmaan ke liye vyavastha hai. Lawn mein 20 se 50 log aaram se baith sakte hain. Adhik jaankari ke liye venue visit karein. | Our main hall seats approximately 100 guests in wedding setup and around 200 in dining arrangement. The lawn accommodates 20-50 guests.",
    },
    {
      q: "Kya parking available hai?",
      qEn: "Is parking available?",
      a: "Haan, hamare paas free on-site parking ki suvidha hai. | Yes, we offer free on-site parking for all guests.",
    },
    {
      q: "Kya catering ki suvidha hai?",
      qEn: "Is catering available?",
      a: "Haan, hum in-house catering provide karte hain. Aap apna caterer bhi la sakte hain. | Yes, we provide in-house catering. Outside caterers are also welcome.",
    },
    {
      q: "Kya decoration hum log khud kara sakte hain?",
      qEn: "Can we arrange our own decoration?",
      a: "Bilkul. Hum in-house decoration dete hain aur aap apna decorator bhi la sakte hain. | Absolutely. We offer in-house decoration and also allow outside decorators.",
    },
    {
      q: "Booking advance kitna dena hoga?",
      qEn: "How much advance is required to book?",
      a: "Advance booking amount event ke prakar par nirbhar karta hai. Adhik jaankari ke liye Pintu Kumar Singh se directly call ya WhatsApp karein. | The advance booking amount depends on the type of event. Please call or WhatsApp Pintu Kumar Singh for details.",
    },
    {
      q: "Cancellation policy kya hai?",
      qEn: "What is the cancellation policy?",
      a: "Agar booking cancel hoti hai to advance amount refund nahi hoga, lekin use nayi date par adjust kiya ja sakta hai. | If a booking is cancelled, the advance is not refunded but can be adjusted to a new date.",
    },
    {
      q: "Kya hum venue visit kar sakte hain?",
      qEn: "Can we visit the venue before booking?",
      a: "Haan bilkul. Aap kisi bhi din, kisi bhi samay venue dekhne aa sakte hain. Koi appointment ki zaroorat nahi. | Yes, you are welcome to visit the venue any day, any time. No appointment needed.",
    },
    {
      q: "Kya generator backup hai?",
      qEn: "Is there power backup?",
      a: "Haan, hamare paas 24 ghante ka generator backup hai. | Yes, we have 24/7 generator backup to ensure uninterrupted power during your event.",
    },
    {
      q: "Hall mein AC hai?",
      qEn: "Is the hall air conditioned?",
      a: "Haan, main hall mein AC ki suvidha hai. | Yes, the main hall is air conditioned.",
    },
    {
      q: "Kon kon se events ke liye hall book ho sakta hai?",
      qEn: "What events can be hosted here?",
      a: "Shaadi, Reception, Sagai, Birthday party aur anya samaajik ayojan. | Weddings, receptions, engagements, birthday parties and other social events.",
    },
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
          --accent-text: #7A5C00;
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

        .floating-action {
          position: fixed;
          right: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          z-index: 9999;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .floating-action:hover { transform: scale(1.08); }

        .floating-whatsapp {
          bottom: 20px;
          background-color: #25D366;
          color: #FFFFFF;
          animation: whatsappPulse 2s ease-out infinite;
        }

        .floating-call {
          bottom: 90px;
          background-color: var(--accent);
          color: var(--primary);
        }

        .floating-action::after {
          content: attr(data-tooltip);
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.8rem;
          padding: 0.4rem 0.7rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition-fast);
        }

        .floating-action:hover::after { opacity: 1; }

        @keyframes whatsappPulse {
          0% { box-shadow: 0 6px 16px rgba(0,0,0,0.25), 0 0 0 0 rgba(37, 211, 102, 0.55); }
          70% { box-shadow: 0 6px 16px rgba(0,0,0,0.25), 0 0 0 18px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 6px 16px rgba(0,0,0,0.25), 0 0 0 0 rgba(37, 211, 102, 0); }
        }

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
        #testimonials { background-color: #FFFDF7; }
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
          color: var(--accent-text);
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
          overflow: hidden;
        }

        .about-image-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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
          color: var(--accent-text);
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
          color: var(--accent-text);
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
          color: var(--accent-text);
          margin-bottom: 0.75rem;
        }

        .service-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--light-text);
          line-height: 1.6;
        }

        /* Gallery Section */
        .gallery-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .gallery-item {
          width: 100%;
          aspect-ratio: 4 / 3;
          background-color: #F5E6C0;
          border: 2px solid var(--accent);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
          overflow: hidden;
          position: relative;
        }

        .gallery-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(139, 0, 0, 0.15);
        }

        .gallery-item img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(139, 0, 0, 0.75);
          color: var(--accent);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.5rem;
          text-align: center;
          z-index: 1;
        }

        .gallery-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #A09070;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          z-index: 1;
        }

        .gallery-note {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--accent-text);
          text-align: center;
          margin-top: 2rem;
        }

        .gallery-cta-wrap { text-align: center; margin-top: 1.5rem; }

        .gallery-cta {
          display: inline-block;
          padding: 0.85rem 2rem;
          background-color: var(--accent);
          color: var(--primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: var(--radius-lg);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .gallery-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.4);
        }

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.92);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          width: 100%;
          max-width: 900px;
          aspect-ratio: 4 / 3;
          background-color: #F5E6C0;
          border: 2px solid var(--accent);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .lightbox-close {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--accent);
          color: var(--primary);
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform var(--transition-fast);
        }

        .lightbox-close:hover { transform: scale(1.08); }

        /* Testimonials Section */
        .testimonials-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .testimonials-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .testimonials-subtitle {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          color: #A0824B;
          letter-spacing: 1px;
          text-align: center;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .testimonial-card {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(201, 168, 76, 0.5);
        }

        .testimonial-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1px;
          background-color: rgba(201, 168, 76, 0.12);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-md);
          margin-bottom: 0.75rem;
        }

        .testimonial-stars {
          color: var(--accent);
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          letter-spacing: 2px;
        }

        .testimonial-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.7;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .testimonial-name {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent);
        }

        .testimonials-note {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-style: italic;
          color: rgba(60, 40, 20, 0.6);
          text-align: center;
          margin-top: 1.25rem;
        }

        .testimonials-cta-wrap {
          text-align: center;
          margin-top: 0.75rem;
        }

        .testimonials-cta {
          display: inline-block;
          padding: 0.85rem 2rem;
          background-color: transparent;
          color: #8A6A2B;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          border: 2px solid #8A6A2B;
          border-radius: var(--radius-lg);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);
        }

        .testimonials-cta:hover {
          transform: translateY(-2px);
          background-color: #8A6A2B;
          color: #FFFDF7;
          box-shadow: 0 6px 20px rgba(138, 106, 43, 0.35);
        }

        /* Reviews Deck */
        .reviews-deck-wrap { width: 100%; }
        .reviews-deck-desktop { display: none; }
        .reviews-deck-mobile { display: block; }

        .reviews-deck {
          position: relative;
          height: 460px;
          max-width: 900px;
          margin: 0 auto;
        }
        .review-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          background: #ffffff;
          border: 2px solid #C9A84C;
          border-radius: var(--radius-lg);
          padding: 12px;
          box-shadow: 0 14px 36px rgba(60, 30, 10, 0.18);
          cursor: pointer;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s ease, z-index 0s linear 0.25s;
          border-width: 2px;
          border-style: solid;
          overflow: visible;
          appearance: none;
          font: inherit;
          color: inherit;
          text-align: left;
        }
        .review-card img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 0;
          user-select: none;
          pointer-events: none;
        }
        .review-card-left {
          transform: translate(-115%, -50%) rotate(-7deg);
          z-index: 1;
        }
        .review-card-right {
          transform: translate(15%, -50%) rotate(7deg);
          z-index: 1;
        }
        .review-card-front {
          transform: translate(-50%, -50%) rotate(0deg) scale(1.05);
          z-index: 3;
          cursor: default;
          box-shadow: 0 22px 50px rgba(60, 30, 10, 0.28);
        }
        .review-card-left:hover { transform: translate(-118%, -52%) rotate(-7deg); }
        .review-card-right:hover { transform: translate(18%, -52%) rotate(7deg); }

        .review-zoom {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 253, 247, 0.95);
          color: #8A6A2B;
          border: 1.5px solid #C9A84C;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
          transition: transform 0.15s ease, background 0.15s ease;
          z-index: 4;
          padding: 0;
        }
        .review-zoom:hover { transform: scale(1.08); background: #fff; }

        /* Mobile embla deck */
        .reviews-embla { overflow: hidden; padding: 40px 0 30px; }
        .reviews-embla-container { display: flex; align-items: center; }
        .reviews-embla-slide {
          flex: 0 0 78%;
          min-width: 0;
          display: flex;
          justify-content: center;
          padding: 0 8px;
        }
        .review-card-mobile {
          position: relative;
          width: 100%;
          max-width: 300px;
          background: #ffffff;
          border: 2px solid #C9A84C;
          border-radius: var(--radius-lg);
          padding: 12px;
          box-shadow: 0 14px 36px rgba(60, 30, 10, 0.18);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .review-card-mobile.is-side {
          transform: scale(0.86) rotate(-4deg);
          opacity: 0.85;
        }
        .reviews-embla-slide:last-child .review-card-mobile.is-side {
          transform: scale(0.86) rotate(4deg);
        }
        .review-card-mobile.is-front {
          transform: scale(1) rotate(0deg);
          box-shadow: 0 22px 50px rgba(60, 30, 10, 0.28);
        }
        .review-card-mobile img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 0;
          pointer-events: none;
          user-select: none;
        }
        .reviews-swipe-hint {
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: rgba(60, 40, 20, 0.55);
          margin-top: 0.5rem;
          letter-spacing: 0.5px;
        }

        /* Lightbox */
        .reviews-lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 10, 5, 0.82);
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }
        .reviews-lightbox-content {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(92vw, 520px);
          max-height: 92vh;
          z-index: 1001;
          outline: none;
        }
        .reviews-lightbox-embla { overflow: hidden; }
        .reviews-lightbox-container { display: flex; }
        .reviews-lightbox-slide {
          flex: 0 0 100%;
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 6px;
        }
        .reviews-lightbox-slide img {
          max-width: 100%;
          max-height: 88vh;
          background: #fff;
          border: 2px solid #C9A84C;
          border-radius: var(--radius-lg);
          padding: 10px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .reviews-lightbox-close {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          color: #2d2d2d;
          border: 2px solid #C9A84C;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          z-index: 2;
        }
        .sr-only-visually {
          position: absolute;
          width: 1px; height: 1px;
          padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0,0,0,0);
          white-space: nowrap; border: 0;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

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

          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .gallery-item { font-size: 1rem; }

          .testimonials-grid { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
          .testimonials-title { font-size: 2.5rem; }
          .testimonial-card { padding: 2rem 1.5rem; }
          .testimonial-text { font-size: 0.95rem; }
          .reviews-deck-desktop { display: block; }
          .reviews-deck-mobile { display: none; }
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

          .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
          .gallery-item { font-size: 1.05rem; }

          .testimonials-grid { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
          .testimonials-title { font-size: 2.5rem; }
          .testimonial-card { padding: 2rem 1.5rem; }
          .testimonial-text { font-size: 1rem; }
        }

        /* FAQ Section */
        .faq-wrapper { text-align: center; margin-bottom: 2.5rem; }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid rgba(201, 168, 76, 0.35);
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 0;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .faq-question-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.45;
        }

        .faq-question-text span {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text);
          margin-top: 0.15rem;
          opacity: 0.85;
        }

        .faq-arrow {
          flex-shrink: 0;
          font-size: 0.9rem;
          color: var(--accent);
          transition: transform var(--transition-normal);
        }

        .faq-item.open .faq-arrow { transform: rotate(180deg); }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--transition-normal);
        }

        .faq-item.open .faq-answer { grid-template-rows: 1fr; }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--text);
          line-height: 1.7;
          padding-bottom: 1.25rem;
        }

        @media (min-width: 768px) {
          .faq-question-text { font-size: 1.05rem; }
          .faq-question-text span { font-size: 0.95rem; }
          .faq-answer-text { font-size: 0.95rem; }
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        .contact-info {
          background-color: var(--white);
          border: 1px solid rgba(201, 168, 76, 0.3);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .contact-info-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .contact-info-title span {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-text);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .contact-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(201, 168, 76, 0.12);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .contact-label {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-text);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.15rem;
        }

        .contact-value {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text);
          line-height: 1.5;
        }

        .contact-value:hover { color: var(--primary); }

        .contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.75rem;
        }

        .contact-btn-call,
        .contact-btn-whatsapp {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.95rem 1.5rem;
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          border-radius: var(--radius-lg);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }

        .contact-btn-call {
          background-color: var(--accent);
          color: var(--primary);
        }

        .contact-btn-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.4);
        }

        .contact-btn-whatsapp {
          background-color: #25D366;
          color: var(--white);
        }

        .contact-btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
        }

        .contact-map {
          width: 100%;
          min-height: 350px;
          border: 2px solid var(--accent);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .contact-map iframe {
          width: 100%;
          height: 100%;
          min-height: 350px;
          display: block;
        }

        .contact-note {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-style: italic;
          color: var(--accent-text);
          text-align: center;
          margin-top: 2.5rem;
          line-height: 1.6;
        }

        /* Footer */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .footer-tagline {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-style: italic;
          color: var(--white);
          margin-bottom: 0.35rem;
        }

        .footer-hindi {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--accent);
        }

        .footer-col-title {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links a {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent);
          transform: translateX(3px);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 0.75rem;
        }

        .footer-contact-item i {
          color: var(--accent);
          margin-top: 0.25rem;
        }

        .footer-contact-item a:hover { color: var(--accent); }

        .footer-divider {
          width: 100%;
          height: 1px;
          background-color: var(--accent);
          margin-bottom: 1.5rem;
          opacity: 0.4;
        }

        .footer-bottom {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }

        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
          .contact-info { padding: 2.5rem; }
          .contact-info-title { font-size: 1.75rem; }
          .contact-map { min-height: 100%; }
          .contact-map iframe { min-height: 100%; }
          .contact-note { font-size: 1rem; margin-top: 3rem; }
          .footer-grid { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
          .footer-logo { font-size: 1.75rem; }
          .footer-tagline { font-size: 1.05rem; }
          .footer-links a { font-size: 1rem; }
          .footer-contact-item { font-size: 0.95rem; }
        }

        @media (min-width: 1024px) {
          .contact-grid { gap: 4rem; }
          .contact-info { padding: 3rem; }
          .contact-info-title { font-size: 2rem; }
          .footer-grid { gap: 3rem; }
          .footer-logo { font-size: 2rem; }
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
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact" className="btn-book-now">Book Now</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
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
              <img
                src={rajeshwarHallAsset.url}
                alt="Rajeshwar Marriage Hall building exterior with signage, Bihta, Bihar"
                loading="lazy"
              />
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
          <div className="gallery-wrapper">
            <h2 className="section-title">Gallery</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">हमारी झलकियाँ</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((label, i) => (
              <button
                type="button"
                key={label}
                className="gallery-item"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open photo: ${label}`}
              >
                {i === 3 ? (
                  <>
                    <img
                      src={entranceGateAsset.url}
                      alt="Entrance gate of Rajeshwar Marriage Hall"
                      loading="lazy"
                    />
                    <span className="gallery-caption">{label}</span>
                  </>
                ) : i === 4 ? (
                  <>
                    <img
                      src={decorativeLightingAsset.url}
                      alt="Decorative lighting at Rajeshwar Marriage Hall at night"
                      loading="lazy"
                    />
                    <span className="gallery-caption">{label}</span>
                  </>
                ) : i === 6 ? (
                  <>
                    <img
                      src={outdoorLawnAsset.url}
                      alt="Outdoor lawn area at Rajeshwar Marriage Hall"
                      loading="lazy"
                    />
                    <span className="gallery-caption">{label}</span>
                  </>
                ) : i === 8 ? (
                  <>
                    <img
                      src={hallExteriorAsset.url}
                      alt="Rajeshwar Marriage Hall building exterior at twilight"
                      loading="lazy"
                    />
                    <span className="gallery-caption">{label}</span>
                  </>
                ) : (
                  <div className="gallery-placeholder">
                    <Camera size={28} strokeWidth={1.5} />
                    <span>{label}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
          <p className="gallery-note">More photos coming soon. Visit the venue for a personal tour.</p>
          <div className="gallery-cta-wrap">
            <a href="#contact" className="gallery-cta">Book a Venue Visit</a>
          </div>
          {lightboxIndex !== null && (
            <div
              className="lightbox-overlay"
              onClick={() => setLightboxIndex(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                {lightboxIndex === 3 ? (
                  <img
                    src={entranceGateAsset.url}
                    alt="Entrance gate of Rajeshwar Marriage Hall"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
                  />
                ) : lightboxIndex === 4 ? (
                  <img
                    src={decorativeLightingAsset.url}
                    alt="Decorative lighting at Rajeshwar Marriage Hall at night"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
                  />
                ) : lightboxIndex === 6 ? (
                  <img
                    src={outdoorLawnAsset.url}
                    alt="Outdoor lawn area at Rajeshwar Marriage Hall"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
                  />
                ) : lightboxIndex === 8 ? (
                  <img
                    src={hallExteriorAsset.url}
                    alt="Rajeshwar Marriage Hall building exterior at twilight"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
                  />
                ) : (
                  galleryItems[lightboxIndex]
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="testimonials-wrapper">
            <h2 className="testimonials-title">What Our Guests Say</h2>
            <div className="about-divider"></div>
            <p className="testimonials-subtitle">हमारे मेहमानों के अनुभव</p>
          </div>
          <ReviewsDeck />
          <p className="testimonials-note">Reviews sourced from Google Maps</p>
          <div className="testimonials-cta-wrap">
            <a
              href="https://maps.app.goo.gl/Hfk4fPVABqLCXofM8"
              target="_blank"
              rel="noopener noreferrer"
              className="testimonials-cta"
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="container">
          <div className="faq-wrapper">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">अक्सर पूछे जाने वाले सवाल</p>
          </div>
          <div className="faq-list" role="region" aria-label="Frequently asked questions">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={isOpen ? "faq-item open" : "faq-item"}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-question-text">
                      {faq.q}
                      <span>{faq.qEn}</span>
                    </span>
                    <i className="fas fa-chevron-down faq-arrow" aria-hidden="true"></i>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="about-wrapper">
            <h2 className="section-title">Contact Us</h2>
            <div className="about-divider"></div>
            <p className="about-hindi">हमसे संपर्क करें</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-title">Get in Touch <span>/ संपर्क करें</span></h3>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value">Bishunpura South Side, Near Bajrangbali Mandir, Bihta, Bihar</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <div className="contact-label">Phone</div>
                  <a href="tel:+916207928461" className="contact-value">+91 62079 28461</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
                <div>
                  <div className="contact-label">WhatsApp</div>
                  <a href="https://wa.me/916207928461" target="_blank" rel="noopener noreferrer" className="contact-value">+91 62079 28461</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <div className="contact-label">Hours</div>
                  <div className="contact-value">24 Hours Available / 24 घंटे उपलब्ध</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-user-tie"></i></div>
                <div>
                  <div className="contact-label">Owner</div>
                  <div className="contact-value">Pintu Kumar Singh (Proprietor)</div>
                </div>
              </div>
              <div className="contact-buttons">
                <a href="tel:+916207928461" className="contact-btn-call">
                  <i className="fas fa-phone"></i> Call Now
                </a>
                <a href="https://wa.me/916207928461" target="_blank" rel="noopener noreferrer" className="contact-btn-whatsapp">
                  <i className="fab fa-whatsapp"></i> WhatsApp Now
                </a>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4676.37051526902!2d84.90333366838726!3d25.573303115584125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d55002b4bb1e7%3A0xbf8a2b3d0c1ca0af!2sRajeshwar%20marriage%20Hall!5e1!3m2!1sen!2sin!4v1782305588729!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Rajeshwar Marriage Hall Location"
              ></iframe>
            </div>
          </div>
          <p className="contact-note">
            Venue visit ke liye kisi appointment ki zaroorat nahi. Aap seedha aa sakte hain. | No appointment needed for a venue visit. Walk in anytime.
          </p>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">Rajeshwar Marriage Hall</h3>
              <p className="footer-tagline">Where Every Celebration Becomes a Memory</p>
              <p className="footer-hindi">जहाँ हर जश्न एक याद बन जाता है</p>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact-col">
              <h4 className="footer-col-title">Contact</h4>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Bishunpura South Side, Near Bajrangbali Mandir, Bihta, Bihar</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+916207928461">+91 62079 28461</a>
              </div>
              <div className="footer-contact-item">
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/916207928461" target="_blank" rel="noopener noreferrer">+91 62079 28461</a>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <p className="footer-bottom">© 2024 Rajeshwar Marriage Hall, Bihta, Bihar. All Rights Reserved.</p>
        </div>
      </footer>

      <a
        href="tel:+916207928461"
        className="floating-action floating-call"
        aria-label="Call Now"
        data-tooltip="Call Now"
      >
        <i className="fas fa-phone"></i>
      </a>
      <a
        href="https://wa.me/916207928461"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action floating-whatsapp"
        aria-label="Chat on WhatsApp"
        data-tooltip="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
