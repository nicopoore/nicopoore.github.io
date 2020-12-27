import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'TOGGLE_SIDEBAR',
      showSidebarMobile: !this.props.showSidebarMobile
    })
  }

  render() {
    console.log(this.props.name)
    return (
      <span className="lg-hidden sm-shown" id="hamburger-span" onClick={this.handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    )
  }
}

const mapStateToProps = (state) => ({
  showSidebarMobile: state.showSidebarMobile
})

export default connect(mapStateToProps)(Hamburger)