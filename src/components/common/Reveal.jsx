import { useInView } from '../../hooks/useInView.js'

/**
 * Wraps children in a fade/slide-up reveal animation triggered on scroll.
 * Usage: <Reveal delay={1}><SomeContent /></Reveal>
 */
function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, isInView] = useInView()
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? 'is-visible' : ''} ${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
