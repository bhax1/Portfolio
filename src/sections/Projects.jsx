import { motion } from 'framer-motion'

import { SectionHeader, Magnetic } from '../components'
import useActiveSection from '../hooks/useActiveSection'

import otakulinkImage from '../assets/projects/otakulink.png'
import otomotoImg from '../assets/projects/otomoto.png'
import codixsImg from '../assets/projects/codixs.png'
import slibraryImg from '../assets/projects/slibrary.png'
import solohubImg from '../assets/projects/solohub.png'
import spamdetectorImg from '../assets/projects/spam-detector.png'

const Projects = ({ setActiveSection }) => {
  useActiveSection('projects', setActiveSection)

  const projects = [
    {
      title: "OtakuLink",
      description: "A cross-platform manga community application built with Flutter and Firebase. Features include manga bookmarking, social interactions, and real-time chat. Manga data is sourced from the Jikan API with custom caching solutions.",
      tech: ["Flutter", "Firebase", "Jikan API", "Dart", "Provider"],
      image: otakulinkImage,
      demo: "#",
      code: "#",
    },
    {
      title: "Otomoto",
      description: "A company-based car rental system developed as a Software Engineering Project 1 and 2. It includes a desktop application for staff and a responsive website for clients, featuring authentication, real-time booking, return tracking, and late fee automation.",
      tech: ["HTML & CSS", "PHP", "Flutter", "PHP", "Supabase", "Firebase"],
      image: otomotoImg,
      demo: "#",
      code: "#"
    },
    {
      title: "Codixs",
      description: "Interactive web-based coding quiz platform with quiz creation, progress tracking, and competitive leaderboards. Built using PHP and JavaScript.",
      tech: ["HTML & CSS", "PHP", "JavaScript", "MySQL"],
      image: codixsImg,
      demo: "#",
      code: "#"
    },
    {
      title: "Library System",
      description: "Java GUI library management system with book and client registration, borrowing/returning, late fee handling, and text file data storage.",
      tech: ["Java", "OOP", "File I/O"],
      image: slibraryImg,
      demo: "#",
      code: "#"
    },
    {
      title: "SoloHub",
      description: "Freelancer productivity suite with task tracking and client management. Features secure login authentication and real-time updates.",
      tech: ["Python", "Flask", "GoLang", "JavaScript", "Firebase"],
      image: solohubImg,
      demo: "#",
      code: "#"
    },
    {
      title: "Spam Detector",
      description: "A spam detection web app built with Streamlit and Python. Trained in Google Colab using a Naive Bayes model and text vectorization.",
      tech: ["Python", "Streamlit", "Google Colab", "Naive Bayes"],
      image: spamdetectorImg,
      demo: "#",
      code: "#"
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHeader index="03" label="Work" title="Projects" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-8% 0px' }}
            >
              <div className="project-image-container">
                <motion.div
                  className="project-image-reveal"
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 1.1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-thumbnail"
                    loading="lazy"
                  />
                </motion.div>
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="card-top">
                <h3 className="card-title">{project.title}</h3>
                <div className="external-links">
                  <a href={project.code} className="link-icon" aria-label={`${project.title} source code`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.demo} className="link-icon" aria-label={`${project.title} live demo`} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <p className="card-description">{project.description}</p>
              <ul className="card-tech">
                {[...new Set(project.tech)].map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="view-more">
          <Magnetic>
            <a href="https://github.com/bhax1" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <span>View More on GitHub</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}

export default Projects
