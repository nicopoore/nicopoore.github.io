import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectTag from './ProjectTag'

class ProjectItem extends Component {

  renderTag = (tag) => {
    return (
      <ProjectTag 
        key={tag}
        tag={tag}
        type='add'
      />
    )
  }

  render() {
    const renderedTags = this.props.tags.map(tag => this.renderTag(tag))
    return (
        <div id={this.props.key}>
          <div> {/* Title Wrapper */}
            <p><a href={this.props.repo}>{this.props.key} {this.props.name}</a></p>
          </div>
          <div> {/* Tags Wrapper */}
            <div>
              {renderedTags}
            </div>
          </div>
        </div>
    )
  }
}

export default connect(null)(ProjectItem)