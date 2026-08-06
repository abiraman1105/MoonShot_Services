import Reveal from '../common/Reveal.jsx'
import { TECHNOLOGIES } from '../../data/technologies.js'
import './Technologies.css'

function Technologies() {
  return (
    <section className="section" id="technologies">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">Our Stack</Reveal>
          <Reveal delay={1} as="h2" className="section-title">Technologies we build with</Reveal>
          <Reveal delay={2} as="p" className="section-subtitle">
            Modern, proven tools chosen for performance, security, and long-term maintainability.
          </Reveal>
        </div>

        <div className="tech-grid">
          {TECHNOLOGIES.map((tech, index) => (
            <Reveal key={tech.name} delay={(index % 4) + 1} className="tech-chip">
              <span className="tech-chip__name">{tech.name}</span>
              <span className="tech-chip__category">{tech.category}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
