import React, { Component } from 'react'
import { connect } from 'react-redux'

class LangItem extends Component {

  fluencyColor = (level) => {
    if (level >= 66) {
      return "highFluency"
    } else if (level >= 33 && level < 66) {
      return "midFluency"
    } else if (level < 33) {
      return "lowFluency"
    }
  }

  render() {
    return (
      <li className={`${this.fluencyColor(this.props.level)}`}>
        <p>
          <span>{this.props.name}</span> - <span>{this.props.fluency}</span>
        </p>
        <p className="chivo langDesc">{this.props.desc}</p>
      </li>
    )
  }
}

export default connect(null)(LangItem)