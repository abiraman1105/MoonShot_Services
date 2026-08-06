import Reveal from '../common/Reveal.jsx'
import { TESTIMONIALS } from '../../data/testimonials.js'
import './Testimonials.css'

function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">Client Voices</Reveal>
          <Reveal delay={1} as="h2" className="section-title">What our clients say about working with us</Reveal>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.id} delay={(index % 2) + 1} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">{t.avatarInitials}</span>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
