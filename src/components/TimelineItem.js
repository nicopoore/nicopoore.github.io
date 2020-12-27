import React, { Component } from 'react'
import { connect } from 'react-redux'

class TimelineItem extends Component {
  constructor(props) {
    super(props)
  }

  date = () => {
    if (this.props.date.hasOwnProperty('from')) {
      return `${this.props.date.from} - ${this.props.date.to}`
    } else {
      return this.props.date
    }
  }

  render() {
    console.log(this.props.id)
    return (
      <li className="TimelineItem" id={this.props.id}>
        <p class="chivo timelineItemMain"><span className="timelineItemTitle">{this.props.title}</span> — <span className="timelineItemSubtitle">{this.props.subtitle}</span></p>
        <p class="chivo timelineItemDates">{this.date()}</p>
        <p class="chivo timelineItemDesc">{this.props.desc}</p>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(TimelineItem)