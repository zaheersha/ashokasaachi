import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import SaachiLogo from "../assets/events/Saachilogo.png";
import ashokafo from "../assets/events/ashokafo.png";


const navLinkClass = ({ isActive }) =>
  `text-sm font-medium tracking-wide transition ${
    isActive ? "text-copper" : "text-black/80 hover:text-black"
  }`;

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-50 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
<Link to="/" className="flex items-center">
        <img
                  src={ashokafo}
                  alt="Saachi Logo"
                  className="h-20 w-40"
                />

        
          <img
            src={SaachiLogo}
            alt="Saachi Logo"
            className="h-20 w-36 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <Link
            to="/#about"
            className="text-sm font-medium tracking-wide text-black/80 hover:text-black"
          >
            About Us
          </Link>

          <NavLink to="/speakers" className={navLinkClass}>
            Speakers
          </NavLink>

          <NavLink to="/past-events" className={navLinkClass}>
            Past Events
          </NavLink>

          <NavLink to="/nominate" className={navLinkClass}>
            Nominate
          </NavLink>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button href="/nominate" size="mm" className="text-pink hover:bg-pink-600">
            
Nominate Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full border border-black/20 p-2 text-black transition hover:border-copper lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-black">
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>

            <Link
              to="/#about"
              onClick={closeMenu}
              className="text-sm font-medium tracking-wide text-black/80"
            >
              About Us
            </Link>

            <NavLink
              to="/speakers"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Speakers
            </NavLink>

            <NavLink
              to="/past-events"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Past Events
            </NavLink>

            <NavLink
              to="/nominate"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Nominate
            </NavLink>

            <Button href="/nominate" className="mt-2 w-fit" size="sm">
              
Nominate Now
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
