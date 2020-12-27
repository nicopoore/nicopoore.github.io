import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

class Education extends Component {

  renderEducation = (item) => {
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
    const renderedFormal = this.props.formalEdArray.reverse().map((_, i, arr) => this.renderEducation(arr[i]))
    const renderedPersonal = this.props.personalEdArray.reverse().map((_, i, arr) => this.renderEducation(arr[i]))
    return (
      <div className="Education main-section" id="education">
        <h2 className="playfair subheading ed-sub" id="formalEdTitle">Formal Education</h2>
        <ul>
          {renderedFormal}
        </ul>
        <h2 className="playfair subheading ed-sub" id="personalEdTitle">Personal Education</h2>
        <ul>
          {renderedPersonal}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showSidebarMain: state.showSidebarMain,
  formalEdArray: state.timelines.formalEdArray,
  personalEdArray: state.timelines.personalEdArray
})

export default connect(mapStateToProps)(Education)