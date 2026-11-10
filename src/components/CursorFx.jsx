import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Soft amber spotlight + a trailing ring that grows over interactive elements.
// Only mounts for fine pointers (mouse / trackpad).
const CursorFx = () => {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)

  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const ringX = useSpring(mx, { stiffness: 380, damping: 32, mass: 0.5 })
  const ringY = useSpring(my, { stiffness: 380, damping: 32, mass: 0.5 })
  const glowX = useSpring(mx, { stiffness: 60, damping: 22 })
  const glowY = useSpring(my, { stiffness: 60, damping: 22 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setHover(Boolean(e.target.closest?.('a, button, input, textarea, [data-cursor]')))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-glow" style={{ x: glowX, y: glowY }} aria-hidden="true" />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hover ? 2.2 : 1, opacity: hover ? 0.9 : 0.6 }}
        transition={{ duration: 0.25 }}
        aria-hidden="true"
      />
    </>
  )
}

export default CursorFx
