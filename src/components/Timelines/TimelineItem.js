import React, { Component } from 'react'
import { connect } from 'react-redux'

class TimelineItem extends Component {

  date = () => {
    if (this.props.date.hasOwnProperty('from')) {
      return `${this.props.date.from} - ${this.props.date.to}`
    } else {
      return this.props.date
    }
  }

  render() {
    return (
      <li className="TimelineItem" id={this.props.id}>
        <p className="chivo timelineItemMain sm-hidden lg-shown"><span className="timelineItemTitle">{this.props.title}</span> — <span className="timelineItemSubtitle">{this.props.subtitle}</span></p>
        <p className="chivo timelineItemMain sm-shown lg-hidden"><span className="timelineItemTitle">{this.props.title}</span><br /><span className="timelineItemSubtitle">{this.props.subtitle}</span></p>
        <p className="chivo timelineItemDates">{this.date()}</p>
        <p className="chivo timelineItemDesc">{this.props.desc}</p>
      </li>
    )
  }
}

export default connect(null)(TimelineItem)