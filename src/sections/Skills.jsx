import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Skills = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('languages')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('skills')
          }
        })
      },
      { threshold: 0.5 }
    )

    const skills = document.querySelector('#skills')
    if (skills) observer.observe(skills)

    return () => {
      if (skills) observer.unobserve(skills)
    }
  }, [setActiveSection])

  const tabs = {
    languages: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Dart', icon: 'devicon-dart-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'Go', icon: 'devicon-go-plain colored' },
      { name: 'R', icon: 'devicon-r-plain colored' },
    ],
    frameworks: [
      { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'ViteJS', icon: 'devicon-vitejs-plain colored' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'Flask', icon: 'devicon-flask-original colored' },
      { name: 'Django', icon: 'devicon-django-plain colored' }
    ],
    tools: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MariaDB', icon: 'devicon-mariadb-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'Figma', icon: 'devicon-figma-plain colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
      { name: 'Intellij', icon: 'devicon-intellij-plain colored' },
      { name: 'Eclipse', icon: 'devicon-eclipse-plain colored' }
    ],
    softskills: [
      { name: 'Problem Solving', icon: '🧩' },
      { name: 'Team Collaboration', icon: '👥' },
      { name: 'Communication', icon: '💬' },
      { name: 'Time Management', icon: '⏱️' },
      { name: 'Attention to Detail', icon: '🔍' },
      { name: 'Mentorship', icon: '🧑‍🏫' },
      { name: 'Adaptability', icon: '🔄' },
      { name: 'Technical Troubleshoot', icon: '🔧' }
    ]
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="skills-tabs">
          <div className="tab-buttons">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="tab-contents">
            <motion.div
              className="skills-grid"
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {tabs[activeTab].map((skill) => (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-icon">
                    {skill.icon.startsWith('devicon-') ? (
                      <i className={skill.icon}></i>
                    ) : (
                      <span>{skill.icon}</span>
                    )}
                  </div>
                  <h3>{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills