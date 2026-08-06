import Reveal from '../common/Reveal.jsx'
import Icon from '../common/Icon.jsx'
import { WHY_CHOOSE_US } from '../../data/whyChooseUs.js'
import './WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <section className="section section--alt" id="why-us">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">Why Moonshot</Reveal>
          <Reveal delay={1} as="h2" className="section-title">Built differently, delivered better</Reveal>
          <Reveal delay={2} as="p" className="section-subtitle">
            A senior team, a disciplined process, and a bias toward quality
            that shows in every detail.
          </Reveal>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) + 1} className="why-card">
              <Icon name={item.icon} size={20} className="why-card__icon" />
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
