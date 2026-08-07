import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { achievements } from '../data'

const Achievements = ({ number }) => (
  <Section
    id="achievements"
    number={number}
    eyebrow="Recognition"
    title="Achievements & certifications"
  >
    <ul className="achievements">
      {achievements.map((item, index) => (
        <Reveal as="li" key={`${item.title}-${item.issuer}`} delay={Math.min(index, 4) * 0.06} className="achievement">
          <span className="achievement__icon" aria-hidden="true">
            <Icon name="award" size={18} />
          </span>

          <div className="achievement__body">
            <div className="achievement__heading">
              <h3 className="achievement__title">{item.title}</h3>
              {item.date && <span className="achievement__date">{item.date}</span>}
            </div>

            <p className="achievement__issuer">{item.issuer}</p>
            {item.description && <p className="achievement__description">{item.description}</p>}

            {item.href && (
              <a href={item.href} className="text-link" target="_blank" rel="noopener noreferrer">
                <Icon name="external" size={15} />
                View credential
              </a>
            )}
          </div>
        </Reveal>
      ))}
    </ul>
  </Section>
)

export default Achievements
