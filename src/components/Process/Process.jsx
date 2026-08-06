import Reveal from '../common/Reveal.jsx'
import { PROCESS_STEPS } from '../../data/process.js'
import './Process.css'

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">How We Work</Reveal>
          <Reveal delay={1} as="h2" className="section-title">A process built for clarity, start to finish</Reveal>
          <Reveal delay={2} as="p" className="section-subtitle">
            Every project follows the same disciplined path, so you always know
            what's happening and what's next.
          </Reveal>
        </div>

        <div className="timeline">
          {PROCESS_STEPS.map((item, index) => (
            <Reveal key={item.step} delay={(index % 4) + 1} className="timeline__item">
              <div className="timeline__marker">
                <span className="timeline__number">{item.step}</span>
              </div>
              <div className="timeline__content">
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
