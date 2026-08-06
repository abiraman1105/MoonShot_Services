import Reveal from '../common/Reveal.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid"></div>
        <div className="hero__orbit hero__orbit--1">
          <span className="hero__node"></span>
        </div>
        <div className="hero__orbit hero__orbit--2">
          <span className="hero__node"></span>
        </div>
        <div className="hero__orbit hero__orbit--3">
          <span className="hero__node"></span>
        </div>
        <div className="hero__glow"></div>
      </div>

      <div className="container hero__inner">
        <Reveal className="eyebrow">Web Development &amp; AI Solutions</Reveal>

        <Reveal delay={1} as="h1" className="hero__title">
          Websites and AI systems<br />built to launch your business further.
        </Reveal>

        <Reveal delay={2} as="p" className="hero__subtitle">
          Moonshot Services designs and engineers premium websites and intelligent
          automation for startups, local businesses, and clinics that refuse to look ordinary.
        </Reveal>

        <Reveal delay={3} className="hero__actions">
          <a href="#contact" className="btn btn-primary">Start Your Project</a>
          <a href="#work" className="btn btn-secondary">View Our Work</a>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
