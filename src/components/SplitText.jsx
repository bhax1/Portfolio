import { motion } from 'framer-motion'

// Masked word-by-word reveal. Words slide up from behind an overflow mask.
const SplitText = ({ text, className = '', delay = 0, stagger = 0.06, inView = true }) => {
  const words = text.split(' ')
  const trigger = inView
    ? { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-10% 0px' } }
    : { initial: 'hidden', animate: 'visible' }

  return (
    <motion.span
      className={`split ${className}`}
      aria-label={text}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...trigger}
    >
      {words.map((word, i) => (
        <span key={i}>
        <span className="split-mask" aria-hidden="true">
          <motion.span
            className="split-word"
            variants={{
              hidden: { y: '115%', rotate: 4 },
              visible: { y: '0%', rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            {word}
          </motion.span>
        </span>
        {i < words.length - 1 && ' '}
        </span>
      ))}
    </motion.span>
  )
}

export default SplitText
