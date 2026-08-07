import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { projects, moreProjectsUrl, projectImage } from '../data'
import { slugify } from '../lib/slugify'

const ProjectCard = ({ project, index }) => {
  const image = projectImage(project.image)
  // Every field except `title` is optional, so a half-filled entry still
  // renders instead of blanking the page.
  const tech = project.tech ?? []

  return (
    <Reveal
      as="article"
      id={`project-${slugify(project.title)}`}
      delay={Math.min(index, 4) * 0.06}
      className={`project ${project.featured ? 'project--featured' : ''}`.trim()}
    >
      {image && (
        <div className="project__media">
          <img src={image} alt={`${project.title} screenshot`} loading="lazy" />
        </div>
      )}

      <div className="project__body">
        <div className="project__heading">
          <h3 className="project__title">{project.title}</h3>
          {project.year && <span className="project__year">{project.year}</span>}
        </div>

        {project.description && <p className="project__description">{project.description}</p>}

        {tech.length > 0 && (
          <ul className="tag-list" aria-label="Technologies used">
            {tech.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}

        {(project.demo || project.code) && (
          <div className="project__links">
            {project.demo && (
              <a href={project.demo} className="text-link" target="_blank" rel="noopener noreferrer">
                <Icon name="external" size={15} />
                Live demo
              </a>
            )}
            {project.code && (
              <a href={project.code} className="text-link" target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={15} />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  )
}

const Projects = ({ number }) => (
  <Section
    id="projects"
    number={number}
    eyebrow="Work"
    title="Selected projects"
    description="Things I have designed, built and shipped, most recent first."
  >
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>

    {moreProjectsUrl && (
      <Reveal className="section__footer">
        <a href={moreProjectsUrl} className="button button--ghost" target="_blank" rel="noopener noreferrer">
          <Icon name="github" size={16} />
          More on GitHub
        </a>
      </Reveal>
    )}
  </Section>
)

export default Projects
