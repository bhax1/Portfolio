import { motion } from 'framer-motion'

import { SplitText, Magnetic, Marquee } from '../components'
import useActiveSection from '../hooks/useActiveSection'

const techStack = [
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Flutter', icon: 'devicon-flutter-plain' },
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'Firebase', icon: 'devicon-firebase-plain' },
  { name: 'Supabase', icon: 'devicon-supabase-plain' },
  { name: 'PHP', icon: 'devicon-php-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
  { name: 'Flask', icon: 'devicon-flask-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' }
]

const ease = [0.16, 1, 0.3, 1]
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease }
})

const Hero = ({ setActiveSection }) => {
  useActiveSection('home', setActiveSection)

  return (
    <section id="home" className="hero-section">
      <div className="container hero-inner">
        <div className="hero-content">
          <motion.p className="hero-pretitle" {...fadeUp(0.1)}>
            <span className="status-dot" /> Hello, I'm
          </motion.p>

          <h1 className="hero-title">
            <SplitText text="Bob" inView={false} delay={0.25} />
            <motion.span
              className="hero-period"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 400, damping: 12 }}
            >
              .
            </motion.span>
          </h1>

          <h2 className="hero-subtitle">
            <SplitText text="Full-Stack Developer & CS Student" inView={false} delay={0.55} stagger={0.05} />
          </h2>

          <motion.p className="hero-description" {...fadeUp(1)}>
            Building digital experiences with clean code and thoughtful design.
            Passionate about creating solutions that bridge technology and human needs.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(1.15)}>
            <Magnetic>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-outline">
                <span>Let's Connect</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease }}
          aria-hidden="true"
        >
          <svg className="badge-ring" viewBox="0 0 200 200">
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#badge-circle" startOffset="0">
                Open to internships • Full-Stack • Mobile • Web •
              </textPath>
            </text>
          </svg>
          <div className="badge-core">
            <span className="badge-arrow">↓</span>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-marquee" {...fadeUp(1.4)}>
        <Marquee items={techStack} />
      </motion.div>
    </section>
  )
}

export default Hero
