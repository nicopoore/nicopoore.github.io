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
      <div className="Skills main-section" id="skills">
        <h2 className="playfair subheading" id="skill-sub">Skills</h2>

        <div className="skill-div chivo" id="techSkills">
          <h3 className="chivo skills-description">Technical skills</h3>
          <ul id="skillList">

            <li className="LangItem highFluency">
              <p className="chiv langHead">
                <span className="langName">Advanced</span>
              </p>
              {advancedSkills}
            </li>

            <li className="LangItem midFluency">
              <p className="chiv langHead">
                <span className="langName">Intermediate</span>
              </p>
              {intermediateSkills}
            </li>

            <li className="LangItem lowFluency">
              <p className="chiv langHead">
                <span className="langName">Basic</span>
              </p>
              {basicSkills}
            </li>

          </ul>
        </div>



        <div className="skill-div" id="languages">
          <h3 className="chivo skills-description">Languages</h3>
          <ul id="langList">
            {langs}
          </ul>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  technical: state.skills.technical,
  languages: state.skills.languages
})

export default connect(mapStateToProps)(Skills)