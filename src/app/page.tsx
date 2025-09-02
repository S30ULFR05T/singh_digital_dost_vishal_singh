"use client";
import Image from "next/image";
import { useState } from "react";
import navbarImage from '../assets/SinghDigitalOnlyLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faEnvelope, faTag, faChartLine, faHeadset, faLightbulb, faStore, faSearchDollar, faThumbsUp, faHashtag, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="container header-container">
          <div className="logo">
            <Image
              src={navbarImage}
              alt="SinghDigitalDost"
              height={56}
              width={56}
              className="logo-image"
            />
            <div>
              <div className="logo-text">SinghDigitalDost</div>
              <div className="tagline">Your Trusted Partner for Digital Growth</div>
            </div>
          </div>

          <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <nav className={menuOpen ? "active" : ""}>
            <ul>
              {["home", "about", "services", "why-us", "contact"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => handleScroll(e, `#${id}`)}>
                    {id.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <h1>Grow Your Business with SinghDigitalDost</h1>
          <p>Expert in GMB, Google Ads, Meta Ads & Social Media Management</p>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="btn btn-primary">
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
          <div className="about-content">
            <p>
              At SinghDigitalDost, we help businesses shine online with smart digital
              marketing strategies. From Google My Business to high-converting Ads, we
              make your brand visible, trusted, and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            {[
              {
                color: "blue",
                icon: faStore,
                title: "Google My Business (GMB)",
                items: ["Verified Setup", "Local SEO", "Weekly Updates", "Review Management"],
              },
              {
                color: "green",
                icon: faSearchDollar,
                title: "Google Ads",
                items: ["Search Ads", "Display Ads", "Location Ads", "Leads & Sales Growth"],
              },
              {
                color: "yellow",
                icon: faThumbsUp,
                title: "Meta Ads (Facebook & Instagram)",
                items: ["Audience Targeting", "Creative Design", "Retargeting & Optimization"],
              },
              {
                color: "red",
                icon: faHashtag,
                title: "Social Media Management",
                items: ["Content Creation", "Reels & Posts", "Hashtag Research", "Monthly Reports"],
              },
            ].map((s) => (
              <div className="service-card" key={s.title}>
                <div className={`card-header card-${s.color}`}></div>
                <div className="card-content">
                  <div className={`service-icon icon-${s.color}`}>
                    <FontAwesomeIcon icon={s.icon} />
                  </div>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us" id="why-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="features">
            {[
              { icon: faTag, title: "Affordable & Transparent Pricing", text: "No hidden costs, clear pricing for all services" },
              { icon: faChartLine, title: "Result-Driven Campaigns", text: "Focused on delivering measurable results for your business" },
              { icon: faHeadset, title: "24/7 Client Support", text: "Always available to address your concerns and queries" },
              { icon: faLightbulb, title: "Personalized Strategy", text: "Customized approach for every business's unique needs" },
            ].map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature-icon">
                  <FontAwesomeIcon icon={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              {[
                { icon: faPhone, title: "Phone", value: "+91 8882884292" },
                { icon: faEnvelope, title: "Email", value: "vs250651@gmail.com" },
                {
                  icon: faShareAlt,
                  title: "Social Media",
                  value: "@SinghDigitalDost",
                  socials: [
                    { href: "https://www.facebook.com/profile.php?id=61579282844058", icon: faFacebookF },
                    { href: "https://www.instagram.com/singhdigitaldost/", icon: faInstagram },
                    { href: "https://www.linkedin.com/in/vishal-singh-6b650519b/", icon: faInstagram },
                  ],
                },
              ].map((c, i) => (
                <div className="contact-method" key={i}>
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={c.icon} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.value}</p>
                  {c.socials && (
                    <div className="social-links">
                      {c.socials.map((s, j) => (
                        <a
                          key={j}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={s.icon} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer>
        <div className="container">
          <div className="copyright">
            <p>Copyright © 2025 SinghDigitalDost – All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
