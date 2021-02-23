import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Hamburger = (props) => {

  const handleClick = () => {
    props.dispatch({
      type: 'TOGGLE_SIDEBAR',
      showSidebarMobile: !props.showSidebarMobile
    })
  }

  return (
    <span className="lg-hidden sm-shown" id="hamburger-span" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </span>
  )
}

const mapStateToProps = (state) => ({
  showSidebarMobile: state.showSidebarMobile
})

export default connect(mapStateToProps)(Hamburger)