import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { education, experience } from '../data'

const Timeline = ({ title, entries }) => (
  <div className="timeline">
    <h3 className="timeline__title">{title}</h3>

    <ol className="timeline__list">
      {entries.map((entry, index) => (
        <Reveal as="li" key={`${entry.title}-${entry.org}`} delay={index * 0.06} className="timeline__item">
          <p className="timeline__period">{entry.period}</p>
          <h4 className="timeline__role">{entry.title}</h4>
          <p className="timeline__org">{entry.org}</p>
          {entry.points?.length > 0 && (
            <ul className="timeline__points">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  </div>
)

const Experience = ({ number }) => (
  <Section id="experience" number={number} eyebrow="Path" title="Education & experience">
    <div className="timelines">
      {education.length > 0 && <Timeline title="Education" entries={education} />}
      {experience.length > 0 && <Timeline title="Experience" entries={experience} />}
    </div>
  </Section>
)

export default Experience
