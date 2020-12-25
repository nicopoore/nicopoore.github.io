import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExperienceItem from './ExperienceItem'

class Experience extends Component {
  constructor(props) {
    super(props)
  }

  renderExperiences = (i, arr) => {
    return (
      <ExperienceItem
        title={arr[i].title}
        subtitle={arr[i].subtitle}
        from={arr[i].from}
        to={arr[i].to}
        desc={arr[i].desc}
      />
    )
  }

  render() {
    const rendered = this.props.experienceArray.reverse().map((_, i, arr) => this.renderExperiences(i, arr))
    return (
      <div className="Experience" id="work">
        <h2 class="playfair" id="experienceTitle">Work Experience</h2>
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
  experienceArray: state.experienceArray
})

export default connect(mapStateToProps)(Experience)