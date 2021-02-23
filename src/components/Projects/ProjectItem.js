import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectTag from './ProjectTag'

const ProjectItem = (props) => {

  const renderTag = (tag) => {
    return (
      <ProjectTag 
        key={tag}
        tag={tag}
        type='add'
      />
    )
  }

    const renderedTags = props.tags.map(tag => renderTag(tag))
    return (
        <div id={props.key}>
          <div> {/* Title Wrapper */}
            <p><a href={props.repo}>{props.key} {props.name}</a></p>
          </div>
          <div> {/* Tags Wrapper */}
            <div>
              {renderedTags}
            </div>
          </div>
        </div>
    )
}

export default connect(null)(ProjectItem)