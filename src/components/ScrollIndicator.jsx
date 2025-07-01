import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div 
      className="scroll-indicator" 
      style={{ scaleX }}
    />
  )
}

export default ScrollIndicator