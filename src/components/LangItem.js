import React, { Component } from 'react'
import { connect } from 'react-redux'

class LangItem extends Component {
  constructor(props) {
    super(props)
  }

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
      <li className={`LangItem ${this.fluencyColor(this.props.level)}`}>
        <p className="chiv langHead">
          <span className="langName">{this.props.name}</span> - <span className="langFluency">{this.props.fluency}</span>
        </p>
        <p className="chivo langDesc">{this.props.desc}</p>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(LangItem)