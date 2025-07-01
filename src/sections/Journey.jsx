import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Journey = ({ setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('journey')
          }
        })
      },
      { threshold: 0.5 }
    )
    
    const journey = document.querySelector('#journey')
    if (journey) observer.observe(journey)
    
    return () => {
      if (journey) observer.unobserve(journey)
    }
  }, [setActiveSection])

  const education = [
    {
      period: "Aug 2022 - Present",
      title: "Bachelor of Science in Computer Science",
      institution: "University of Mindanao (Matina)",
      details: [
        "Specializing in software development and cloud technologies",
        "Coursework includes Data Structures, Algorithms, Database Systems",
        "Focus on Web, Desktop, and Mobile Development"
      ]
    }
  ]

  const experience = [
    {
      period: "Oct 2024 - Present",
      title: "Member - University Internal Organizations",
      institution: "UMSDC | DataOwls",
      details: [
        "Participated in technical workshops and coding training",
        "Collaborative projects developing problem-solving and teamwork skills",
        "Seminars on emerging technologies and career development"
      ]
    }
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Journey</h2>
        </div>
        
        <div className="journey-timeline">
          <div className="timeline-group">
            <h3 className="timeline-heading">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            
            {education.map((item, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <h5>{item.institution}</h5>
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="timeline-group">
            <h3 className="timeline-heading">
              <i className="fa-brands fa-connectdevelop"></i> Affiliation
            </h3>
            
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <h5>{item.institution}</h5>
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey