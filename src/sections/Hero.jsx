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

  const deviconClasses = [
    'devicon-python-plain colored',
    'devicon-javascript-plain colored',
    'devicon-react-original colored',
    'devicon-java-plain colored',
    'devicon-html5-plain colored',
    'devicon-css3-plain colored',
    'devicon-nodejs-plain colored',
    'devicon-git-plain colored',
  ]

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
          <div className="tech-sphere">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="tech-ring"
                style={{ '--i': i }}
              >
                {[...Array(8)].map((_, j) => (
                  <div
                    key={j}
                    className="tech-dot"
                    style={{ '--j': j }}
                  >
                    <div className="tech-icon">
                      <i className={deviconClasses[j % deviconClasses.length]}></i>
                    </div>
                  </div>
                ))}
              </div>
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