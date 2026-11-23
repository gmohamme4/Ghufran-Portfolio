
import { useState } from "react";
import "./Navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-container">
      <nav className="navbar" aria-label="Main navigation">
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
