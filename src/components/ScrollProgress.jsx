import { motion, useScroll, useSpring } from 'framer-motion'

const Bar = motion.div

/** Hairline reading-progress bar pinned under the header. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return <Bar className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

export default ScrollProgress
