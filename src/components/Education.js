import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

class Education extends Component {
  constructor(props) {
    super(props);
  }

  renderFormal = (i, arr) => {
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
    const renderedFormal = this.props.formalEdArray.reverse().map((_, i, arr) => this.renderFormal(i, arr))
    const renderedPersonal = this.props.personalEdArray.reverse().map((_, i, arr) => this.renderFormal(i, arr))
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