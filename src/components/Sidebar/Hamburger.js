import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Hamburger = (props) => {

  const handleClick = () => {
    props.setSidebarIsOpen(() => !props.sidebarIsOpen)
  }

  return (
    <span className="lg-hidden sm-shown" id="hamburger-span" onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </span>
  )
}

export default Hamburger