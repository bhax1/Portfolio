import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Hero = ({ setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('home')
          }
        })
      },
      { threshold: 0.5 }
    )

    const hero = document.querySelector('#home')
    if (hero) observer.observe(hero)

    return () => {
      if (hero) observer.unobserve(hero)
    }
  }, [setActiveSection])

  // Expanded tech icons array
  const deviconClasses = [
    'devicon-python-plain colored',
    'devicon-javascript-plain colored',
    'devicon-typescript-plain colored',
    'devicon-react-original colored',
    'devicon-vuejs-plain colored',
    'devicon-java-plain colored',
    'devicon-cplusplus-plain colored',
    'devicon-html5-plain colored',
    'devicon-css3-plain colored',
    'devicon-nodejs-plain colored',
    'devicon-express-original colored',
    'devicon-mysql-plain colored',
    'devicon-git-plain colored',
    'devicon-github-original colored',
    'devicon-docker-plain colored',
    'devicon-android-plain colored'
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-pretitle" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="text-gradient">Bob</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            Full-Stack Developer & CS Student
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Building digital experiences with clean code and thoughtful design.
            Passionate about creating solutions that bridge technology and human needs.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <div className="tech-sphere-container">
            {/* Core sphere */}
            <motion.div 
              className="tech-sphere-core"
              animate={{
                rotateY: 360,
                transition: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <div className="tech-icon-main">
                <i className="devicon-code-plain colored"></i>
              </div>
            </motion.div>

            {/* Three orbital rings */}
            {[0, 1, 2].map((orbitIndex) => (
              <motion.div
                key={`orbit-${orbitIndex}`}
                className="tech-orbit"
                animate={{
                  rotateY: orbitIndex % 2 ? 360 : -360,
                  transition: {
                    duration: 20 + orbitIndex * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {deviconClasses
                  .filter((_, i) => i % 3 === orbitIndex)
                  .map((iconClass, i) => (
                    <div 
                      key={`icon-${orbitIndex}-${i}`}
                      className="tech-orbital-icon"
                      style={{
                        transform: `rotateY(${i * (360/6)}deg) translateZ(${120 + orbitIndex * 60}px)`
                      }}
                    >
                      <i className={iconClass}></i>
                    </div>
                  ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll Down</span>
        <div className="mouse-indicator">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero