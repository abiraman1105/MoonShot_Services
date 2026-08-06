import { useState } from 'react'
import { SITE } from '../../constants/theme.js'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  { label: 'Custom Websites', href: '#services' },
  { label: 'AI Integration', href: '#services' },
  { label: 'E-Commerce', href: '#services' },
  { label: 'Business Automation', href: '#services' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            {/* Moonshot Services Logo Goes Here */}
            <span className="footer__logo-placeholder" aria-hidden="true"></span>
            <span className="footer__logo-text">Moonshot Services</span>
          </a>
          <p className="footer__tagline">{SITE.tagline}</p>

          <div className="footer__socials" aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="footer__social">
                {social.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Services</h3>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__newsletter">
          <h3 className="footer__heading">Stay Updated</h3>
          <p className="footer__newsletter-text">Occasional notes on web and AI, no spam.</p>

          {subscribed ? (
            <p className="footer__newsletter-success" role="status">You're subscribed — thank you.</p>
          ) : (
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Moonshot Services. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
