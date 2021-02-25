import React from 'react'
import { connect } from 'react-redux'
import SkillItem from './SkillItem'
import LangItem from './LangItem'
import { skills as enSkills } from '../../rawData/enContent.json'
import { skills as esSkills } from '../../rawData/esContent.json'

const Skills = (props) => {

  const skills = props.lang === 'en' ? enSkills : esSkills
  const advancedSkills = skills.technical.filter(skill => skill.level === "advanced")
  const intermediateSkills = skills.technical.filter(skill => skill.level === "intermediate")
  const basicSkills = skills.technical.filter(skill => skill.level === "basic")
  return (
    <section className="Skills" id="skills">
      <h2 className="subheading">{props.lang === 'en' ? 'Skills' : 'Conocimientos'}</h2>

      <div>
        <h3>{props.lang === 'en' ? 'Technical Skills' : 'Conocimientos técnicos'}</h3>
        <ul>

          <li className="highFluency">
            <p>
              <span>{props.lang === 'en' ? 'Advanced' : 'Avanzado'}</span>
            </p>
            {advancedSkills.map(skill => (
              <SkillItem 
                key={skill.code}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </li>

          <li className="midFluency">
            <p>
              <span>{props.lang === 'en' ? 'Intermediate' : 'Intermedio'}</span>
            </p>
            {intermediateSkills.map(skill => (
              <SkillItem 
                key={skill.code}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </li>

          <li className="lowFluency">
            <p>
              <span>{props.lang === 'en' ? 'Basic' : 'Básico'}</span>
            </p>
            {basicSkills.map(skill => (
              <SkillItem 
                key={skill.code}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </li>

        </ul>
      </div>

      <div>
        <h3>{props.lang === 'en' ? 'Languages' : 'Lenguajes'}</h3>
        <ul>
          {skills.languages.map(lang => (
            <LangItem 
              key={lang.code}
              name={lang.lang}
              fluency={lang.fluency}
              level={lang.level}
              desc={lang.desc}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang
})

export default connect(mapStateToProps)(Skills)