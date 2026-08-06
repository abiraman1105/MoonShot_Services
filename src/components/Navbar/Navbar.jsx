import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition.js'
import { NAV_LINKS } from '../../constants/navLinks.js'
import './Navbar.css'

function Navbar() {
  const scrolled = useScrollPosition(40)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Moonshot Services home">
          {/* Moonshot Services Logo Goes Here */}
          <span className="navbar__logo-placeholder" aria-hidden="true"></span>
          <span className="navbar__logo-text">Moonshot Services</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn-primary btn-sm navbar__cta">
            Start a Project
          </a>

          <button
            className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary navbar__mobile-cta" onClick={closeMenu}>
          Start a Project
        </a>
      </nav>
    </header>
  )
}

export default Navbar
