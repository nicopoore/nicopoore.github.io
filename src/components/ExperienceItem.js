import React, { Component } from 'react'
import { connect } from 'react-redux'

class ExperienceItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="ExperienceItem">
        <p class="chivo" id="expItemMain"><span id="expItemTitle">{this.props.title}</span> — <span id="expItemSubtitle">{this.props.subtitle}</span></p>
        <p class="chivo" id="expItemDates">{this.props.from} - {this.props.to}</p>
        <p class="chivo" id="expItemDesc">{this.props.desc}</p>
      </li>
    )
  }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps)(ExperienceItem)