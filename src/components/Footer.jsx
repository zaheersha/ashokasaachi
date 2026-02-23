import { createElement } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

import SaachiLogo from "../assets/events/Saachilogo.png";
import eviternship from "../assets/events/Eviternship.png";

/* ================= SOCIAL LINKS ================= */
const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

function Footer() {
  return (
    <footer className="border-t border-stone/40 bg-ink text-white">
      {/* 3 COLUMN GRID */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">

        {/* ================= LEFT : LOGOS + DIGITAL PARTNER ================= */}
        <div className="flex flex-col gap-6">

          {/* SAACHI LOGO + DIGITAL PARTNER TEXT */}
          <div className="flex items-center gap-4">
            <img
              src={SaachiLogo}
              alt="Saachi Logo"
              className="h-20 w-45"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-copper/80">
                Digital Partner
              </p>

              <img
                src={eviternship}
                alt="Eviternship Digital Partner"
                className="mt-2 h-20 w-45 object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-copper/80">
            Contact
          </p>

          <ul className="mt-4 space-y-2 text-sm text-white/70 leading-relaxed">
            <li>
              NH 44, Opp Dupadu Railway Station, 
              Dupadu, Kurnool, Andhra Pradesh 518002
            </li>

            <li>saachiawards.ashoka@gmail.com</li>
            <li>+91 77999 99315</li>
          </ul>
        </div>

        {/* ================= EXPLORE ================= */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-copper/80">
            Explore
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <Link to="/speakers" className="transition hover:text-white">Speakers</Link>
            <Link to="/past-events" className="transition hover:text-white">Past Events</Link>
            <Link to="/nominate" className="transition hover:text-white">Nominate</Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-copper hover:text-white"
              >
                {createElement(icon, { size: 18 })}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        Copyright 2026 EvITernship. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
