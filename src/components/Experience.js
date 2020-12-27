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
    const rendered = this.props.experienceArray.reverse().map((_, i, arr) => this.renderExperiences(arr[i]))
    return (
      <div className="Experience main-section" id="work">
        <h2 className="playfair subheading" id="experienceTitle">Work Experience</h2>
        <ul>
          {rendered}
        </ul>
      </div>
    )
  }
}

/**/

const mapStateToProps = (state) => ({
  showSidebarMain: state.showSidebarMain,
  experienceArray: state.timelines.experienceArray
})

export default connect(mapStateToProps)(Experience)