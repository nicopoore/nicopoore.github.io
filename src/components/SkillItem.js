import React, { Component } from 'react'
import { connect } from 'react-redux'

class SkillItem extends Component {

  render() {
    return (
        <p className="chivo">
          - {this.props.name}
        </p>
    )
  }
}

export default connect(null)(SkillItem)