import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, isActive, duration = 1600) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!isActive) return

    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [isActive, target, duration])

  return value
}
