import { motion } from 'framer-motion'
import SplitText from './SplitText'

const SectionHeader = ({ index, label, title }) => (
  <div className="section-header">
    <motion.div
      className="section-eyebrow"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-index">{index}</span>
      <motion.span
        className="section-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
      <span className="section-label">{label}</span>
    </motion.div>
    <h2 className="section-title">
      <SplitText text={title} />
    </h2>
  </div>
)

export default SectionHeader
