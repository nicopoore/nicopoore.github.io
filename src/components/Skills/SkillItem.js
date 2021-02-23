import React, { Component } from 'react'
import { connect } from 'react-redux'

const SkillItem = (props) => (
  <p className="chivo">
    - {props.name}
  </p>
)

export default SkillItem