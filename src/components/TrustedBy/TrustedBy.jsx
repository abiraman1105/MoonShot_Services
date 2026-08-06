import Reveal from '../common/Reveal.jsx'
import './TrustedBy.css'

const COMPANIES = [
  'Aurelia', 'Northline', 'Vantage', 'Harbor & Finch', 'Pulse', 'Fieldstone'
]

function TrustedBy() {
  return (
    <section className="trusted" aria-label="Trusted by growing businesses">
      <div className="container">
        <Reveal className="trusted__label">Trusted by growing businesses</Reveal>
        <Reveal delay={1} className="trusted__row">
          {COMPANIES.map((name) => (
            <span key={name} className="trusted__logo">{name}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default TrustedBy
