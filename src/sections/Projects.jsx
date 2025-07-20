import { motion } from 'framer-motion'
import { useEffect } from 'react'

import otakulinkImage from '../assets/projects/otakulink.png'
import otomotoImg from '../assets/projects/otomoto.png'
import codixsImg from '../assets/projects/codixs.png'
import slibraryImg from '../assets/projects/slibrary.png'
import solohubImg from '../assets/projects/solohub.png'
import spamdetectorImg from '../assets/projects/spam-detector.png'

const Projects = ({ setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('projects')
          }
        })
      },
      { threshold: 0.5 }
    )
    
    const projects = document.querySelector('#projects')
    if (projects) observer.observe(projects)
    
    return () => {
      if (projects) observer.unobserve(projects)
    }
  }, [setActiveSection])

  const projects = [
    {
      title: "OtakuLink",
      description: "A cross-platform manga community application built with Flutter and Firebase. Features include manga bookmarking, social interactions, and real-time chat. Manga data is sourced from the Jikan API with custom caching solutions.",
      tech: ["Flutter", "Firebase", "Jikan API", "Dart", "Provider"],
      image: otakulinkImage,
      demo: "https://otakulink-1d1d8.web.app",
      code: "https://github.com/bhax1/otakulink",
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
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {project.featured && (
                <div className="project-label">Featured Project</div>
              )}
              <div className="card-header">
                <div className="external-links">
                  <a href={project.code} className="link-icon" aria-label="View project code" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.demo} className="link-icon" aria-label="View live demo" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-thumbnail"
                  loading="lazy"
                />
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <ul className="card-tech">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="view-more">
          <a href="https://github.com/bhax1" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects