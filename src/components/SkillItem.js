import React, { Component } from 'react'
import { connect } from 'react-redux'

class SkillItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.name)
    return (
        <p className="chivo">
          - {this.props.name}
        </p>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(SkillItem)