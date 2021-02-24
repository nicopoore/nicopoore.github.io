import React from 'react'
import { connect } from 'react-redux'
import SkillItem from './SkillItem'
import LangItem from './LangItem'
import { skills as enSkills } from '../../rawData/enContent.json'
import { skills as esSkills } from '../../rawData/esContent.json'

const Skills = (props) => {

  const renderSkill = (item) => {
    return (
      <SkillItem 
        key={item.code}
        name={item.name}
        level={item.level}
      />
    )
  }

  const renderLang = (item) => {
    return (
      <LangItem 
        key={item.code}
        name={item.lang}
        fluency={item.fluency}
        level={item.level}
        desc={item.desc}
      />
    )
  }

  const skills = props.lang === 'en' ? enSkills : esSkills
  const advancedSkills = skills.technical.filter(skill => skill.level === "advanced").map(item => renderSkill(item))
  const intermediateSkills = skills.technical.filter(skill => skill.level === "intermediate").map(item => renderSkill(item))
  const basicSkills = skills.technical.filter(skill => skill.level === "basic").map(item => renderSkill(item))
  const langs = skills.languages.map(item => renderLang(item))
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
            {advancedSkills}
          </li>

          <li className="midFluency">
            <p>
              <span>{props.lang === 'en' ? 'Intermediate' : 'Intermedio'}</span>
            </p>
            {intermediateSkills}
          </li>

          <li className="lowFluency">
            <p>
              <span>{props.lang === 'en' ? 'Basic' : 'Básico'}</span>
            </p>
            {basicSkills}
          </li>

        </ul>
      </div>

      <div>
        <h3>{props.lang === 'en' ? 'Languages' : 'Lenguajes'}</h3>
        <ul>
          {langs}
        </ul>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang
})

export default connect(mapStateToProps)(Skills)