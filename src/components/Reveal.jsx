import { motion } from 'framer-motion'

// Fade + rise on scroll into view.
const Reveal = ({ children, delay = 0, y = 28, className = '', ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-8% 0px' }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
)

export default Reveal
