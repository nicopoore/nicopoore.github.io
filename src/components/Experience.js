import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

class Experience extends Component {

  renderExperiences = (item) => {
    return (
      <TimelineItem
        id={item.id}
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        date={item.date}
        desc={item.desc}
      />
    )
  }

  render() {
    const rendered = this.props.experienceArray.reverse().map(item => this.renderExperiences(item))
    return (
      <div className="Experience main-section" id="work">
        <h2 className="playfair subheading" id="experienceTitle">{this.props.lang === 'en' ? 'Work Experience' : 'Experiencia laboral'}</h2>
        <ul>
          {rendered}
        </ul>
      </div>
    )
  }
}

/**/

const mapStateToProps = (state) => ({
  lang: state.lang,
  showSidebarMain: state.showSidebarMain,
  experienceArray: state.timelines.experienceArray
})

export default connect(mapStateToProps)(Experience)