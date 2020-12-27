import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

class Experience extends Component {
  constructor(props) {
    super(props)
  }

  renderExperiences = (i, arr) => {
    return (
      <TimelineItem
        id={arr[i].id}
        title={arr[i].title}
        subtitle={arr[i].subtitle}
        date={arr[i].date}
        desc={arr[i].desc}
      />
    )
  }

  render() {
    const rendered = this.props.experienceArray.reverse().map((_, i, arr) => this.renderExperiences(i, arr))
    return (
      <div className="Experience main-section" id="work">
        <h2 class="playfair subheading" id="experienceTitle">Work Experience</h2>
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