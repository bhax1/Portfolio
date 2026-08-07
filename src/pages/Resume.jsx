import {
  profile,
  socials,
  skillGroups,
  education,
  experience,
  achievements,
  projects,
  resumeUrl,
} from '../data'

/** Strips the protocol so links read as plain text on paper. */
const displayUrl = (href) => href.replace(/^https?:\/\//, '').replace(/\/$/, '')

const Entry = ({ item }) => (
  <li className="cv-entry">
    <div className="cv-entry__head">
      <h3 className="cv-entry__title">{item.title}</h3>
      <span className="cv-entry__period">{item.period}</span>
    </div>
    <p className="cv-entry__org">{item.org}</p>
    {item.points?.length > 0 && (
      <ul className="cv-entry__points">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    )}
  </li>
)

const Resume = () => {
  // Web links belong on the resume as readable text, mailto: does not.
  const webLinks = socials.filter((social) => social.href.startsWith('http'))

  return (
    <div className="cv">
      <div className="cv-toolbar" data-print-hide>
        <a className="button button--ghost" href={import.meta.env.BASE_URL}>
          ← Back to portfolio
        </a>

        <div className="cv-toolbar__actions">
          <a className="button button--ghost" href={resumeUrl} download>
            Download PDF
          </a>
          <button type="button" className="button button--primary" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <h1 className="cv-name">{profile.name}</h1>
          <p className="cv-role">{profile.role}</p>

          <ul className="cv-contact">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {profile.phone && <li>{profile.phone}</li>}
            <li>{profile.location}</li>
            {profile.website && (
              <li>
                <a href={`https://${displayUrl(profile.website)}`}>{displayUrl(profile.website)}</a>
              </li>
            )}
            {webLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href}>{displayUrl(social.href)}</a>
              </li>
            ))}
          </ul>
        </header>

        <section className="cv-section">
          <h2 className="cv-section__title">Summary</h2>
          <p className="cv-summary">{profile.summary}</p>
        </section>

        {skillGroups.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section__title">Skills</h2>
            <dl className="cv-skills">
              {skillGroups.map((group) => (
                <div className="cv-skills__row" key={group.title}>
                  <dt>{group.title}</dt>
                  <dd>{group.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {experience.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section__title">Experience</h2>
            <ul className="cv-list">
              {experience.map((item) => (
                <Entry item={item} key={`${item.title}-${item.org}`} />
              ))}
            </ul>
          </section>
        )}

        {education.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section__title">Education</h2>
            <ul className="cv-list">
              {education.map((item) => (
                <Entry item={item} key={`${item.title}-${item.org}`} />
              ))}
            </ul>
          </section>
        )}

        {projects.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section__title">Selected projects</h2>
            <ul className="cv-list">
              {projects.map((project) => (
                <li className="cv-entry" key={project.title}>
                  <div className="cv-entry__head">
                    <h3 className="cv-entry__title">{project.title}</h3>
                    {project.year && <span className="cv-entry__period">{project.year}</span>}
                  </div>
                  {project.tech?.length > 0 && (
                    <p className="cv-entry__org">{project.tech.join(' · ')}</p>
                  )}
                  {project.description && (
                    <p className="cv-entry__text">{project.description}</p>
                  )}
                  {(project.demo || project.code) && (
                    <p className="cv-entry__links">
                      {[project.demo, project.code].filter(Boolean).map((href) => (
                        <a href={href} key={href}>
                          {displayUrl(href)}
                        </a>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {achievements.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section__title">Achievements & certifications</h2>
            <ul className="cv-list">
              {achievements.map((item) => (
                <li className="cv-entry" key={`${item.title}-${item.issuer}`}>
                  <div className="cv-entry__head">
                    <h3 className="cv-entry__title">{item.title}</h3>
                    {item.date && <span className="cv-entry__period">{item.date}</span>}
                  </div>
                  <p className="cv-entry__org">{item.issuer}</p>
                  {item.description && <p className="cv-entry__text">{item.description}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}

export default Resume
