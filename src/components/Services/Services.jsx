import Reveal from '../common/Reveal.jsx'
import Icon from '../common/Icon.jsx'
import { SERVICES } from '../../data/services.js'
import './Services.css'

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">What We Do</Reveal>
          <Reveal delay={1} as="h2" className="section-title">Services built to move your business forward</Reveal>
          <Reveal delay={2} as="p" className="section-subtitle">
            From first line of code to intelligent automation, everything is engineered
            around one outcome: results you can measure.
          </Reveal>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) + 1} className="service-card">
              <div className="service-card__icon">
                <Icon name={service.icon} size={22} />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
