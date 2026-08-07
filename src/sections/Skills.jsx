import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { skillGroups } from '../data'

const Skills = ({ number }) => (
  <Section id="skills" number={number} eyebrow="Toolkit" title="Skills">
    <div className="skill-groups">
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.06} className="skill-group">
          <h3 className="skill-group__title">{group.title}</h3>
          <ul className="tag-list">
            {group.items.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
)

export default Skills
