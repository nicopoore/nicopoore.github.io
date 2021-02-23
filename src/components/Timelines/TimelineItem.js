import React, { Component } from 'react'
import { connect } from 'react-redux'

const TimelineItem = (props) => {

  const date = () => {
    if (props.date.hasOwnProperty('from')) {
      return `${props.date.from} - ${props.date.to}`
    } else {
      return props.date
    }
  }

  return (
    <li className="timelineItem chivo" id={props.id}>
      <h5 className="sm-hidden lg-shown"><span>{props.title}</span> — <span>{props.subtitle}</span></h5>
      <h5 className="sm-shown lg-hidden"><span>{props.title}</span><br /><span>{props.subtitle}</span></h5>
      <p>{date()}</p>
      <p>{props.desc}</p>
    </li>
  )
}

export default TimelineItem