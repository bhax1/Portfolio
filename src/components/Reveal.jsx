import { motion, useReducedMotion } from 'framer-motion'

/**
 * Small, uniform entrance animation used across every section.
 * Collapses to a plain fade-free render when the visitor has asked for
 * reduced motion.
 */
const Reveal = ({ as = 'div', delay = 0, className = '', children, ...rest }) => {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (reduceMotion) {
    const Plain = as
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Reveal
