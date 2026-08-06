import { useScrollPosition } from '../../hooks/useScrollPosition.js'
import './BackToTop.css'

function BackToTop() {
  const visible = useScrollPosition(480)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTop
