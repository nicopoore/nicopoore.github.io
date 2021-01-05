import React, { Component } from 'react'
import { connect } from 'react-redux'
import SkillItem from './SkillItem'
import LangItem from './LangItem'

class Skills extends Component {

  renderSkill = (item) => {
    return (
      <SkillItem 
        key={item.code}
        name={item.name}
        level={item.level}
      />
    )
  }

  renderLang = (item) => {
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

  render() {
    const advancedSkills = this.props.technical.filter(skill => skill.level === "advanced").map(item => this.renderSkill(item))
    const intermediateSkills = this.props.technical.filter(skill => skill.level === "intermediate").map(item => this.renderSkill(item))
    const basicSkills = this.props.technical.filter(skill => skill.level === "basic").map(item => this.renderSkill(item))
    const langs = this.props.languages.map(item => this.renderLang(item))
    return (
      <section className="Skills" id="skills">
        <h2 className="subheading">{this.props.lang === 'en' ? 'Skills' : 'Conocimientos'}</h2>

        <div>
          <h3>{this.props.lang === 'en' ? 'Technical Skills' : 'Conocimientos técnicos'}</h3>
          <ul>

            <li className="highFluency">
              <p>
                <span>{this.props.lang === 'en' ? 'Advanced' : 'Avanzado'}</span>
              </p>
              {advancedSkills}
            </li>

            <li className="midFluency">
              <p>
                <span>{this.props.lang === 'en' ? 'Intermediate' : 'Intermedio'}</span>
              </p>
              {intermediateSkills}
            </li>

            <li className="lowFluency">
              <p>
                <span>{this.props.lang === 'en' ? 'Basic' : 'Básico'}</span>
              </p>
              {basicSkills}
            </li>

          </ul>
        </div>



        <div>
          <h3>{this.props.lang === 'en' ? 'Languages' : 'Lenguajes'}</h3>
          <ul>
            {langs}
          </ul>
        </div>

      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  technical: state.skills.technical,
  languages: state.skills.languages
})

export default connect(mapStateToProps)(Skills)