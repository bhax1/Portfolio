import { motion } from 'framer-motion'
import { useEffect } from 'react'

import otakulinkImage from '../assets/otakulink.png'
import otomotoImg from '../assets/otomoto.png'
import codixsImg from '../assets/codixs.png'
import slibraryImg from '../assets/slibrary.png'
import solohubImg from '../assets/solohub.png'

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

  const featuredProject = {
    title: "OtakuLink",
    description: "A cross-platform manga community application built with Flutter and Firebase. Features include manga bookmarking, social interactions, and real-time chat. Manga data is sourced from the Jikan API with custom caching solutions.",
    tech: ["Flutter", "Firebase", "Jikan API", "Dart", "Provider"],
    image: './assets/otakulink.png',
    demo: "https://otakulink-1d1d8.web.app",
    code: "https://github.com/bhax1/otakulink"
  }

  const projects = [
    {
      title: "Otomoto",
      description: "A company-based car rental system developed as a Software Engineering Project 1 and 2. It includes a desktop application for staff and a responsive website for clients, featuring authentication, real-time booking, return tracking, and late fee automation.",
      tech: ["HTML & CSS", "PHP", "Flutter", "PHP", "Supabase", "Firebase"],
      image: otomotoImg
    },
    {
      title: "Codixs",
      description: "Interactive web-based coding quiz platform with quiz creation, progress tracking, and competitive leaderboards. Built using PHP and JavaScript.",
      tech: ["HTML & CSS", "PHP", "JavaScript", "MySQL"],
      image: codixsImg
    },
    {
      title: "Library System",
      description: "Java GUI library management system with book and client registration, borrowing/returning, late fee handling, and text file data storage.",
      tech: ["Java", "OOP", "File I/O"],
      image: slibraryImg
    },
    {
      title: "SoloHub",
      description: "Freelancer productivity suite with task tracking and client management. Features secure login authentication and real-time updates.",
      tech: ["Python", "Flask", "GoLang", "JavaScript", "Firebase"],
      image: solohubImg
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
        </div>
        
        <div className="project-showcase">
          <motion.div 
            className="project-featured"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-media">
              <img
                src={otakulinkImage}
                alt="OtakuLink preview"
                className="project-image"
                loading="lazy"
              />

              <div className="project-links">
                <a href={featuredProject.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={featuredProject.code} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
            
            <div className="project-details">
              <span className="project-label">Featured Project</span>
              <h3 className="project-title">{featuredProject.title}</h3>
              <div className="project-description">
                <p>{featuredProject.description}</p>
              </div>
              <ul className="project-tech">
                {featuredProject.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-header">
                  <div className="external-links">
                    <a href="#" className="link-icon" aria-label="View project code">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="link-icon" aria-label="View live demo">
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