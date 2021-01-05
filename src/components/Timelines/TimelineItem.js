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
      <li className="timelineItem chivo" id={this.props.id}>
        <h5 className="sm-hidden lg-shown"><span>{this.props.title}</span> — <span>{this.props.subtitle}</span></h5>
        <h5 className="sm-shown lg-hidden"><span>{this.props.title}</span><br /><span>{this.props.subtitle}</span></h5>
        <p>{this.date()}</p>
        <p>{this.props.desc}</p>
      </li>
    )
  }
}

export default connect(null)(TimelineItem)