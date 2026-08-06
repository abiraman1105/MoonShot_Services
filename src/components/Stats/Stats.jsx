import { useInView } from '../../hooks/useInView.js'
import { useCountUp } from '../../hooks/useCountUp.js'
import Reveal from '../common/Reveal.jsx'
import { STATS } from '../../data/stats.js'
import './Stats.css'

function StatItem({ label, value, suffix }) {
  const [ref, isInView] = useInView({ threshold: 0.4 })
  const count = useCountUp(value, isInView)

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-item__value">{count}{suffix}</span>
      <span className="stat-item__label">{label}</span>
    </div>
  )
}

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <Reveal className="stats-grid" as="div">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Stats
