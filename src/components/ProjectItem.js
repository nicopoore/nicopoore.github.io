import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectTag from './ProjectTag'

class ProjectItem extends Component {

  renderTag = (tag) => {
    return (
      <ProjectTag 
        tag={tag}
        type='add'
      />
    )
  }

  render() {
    const renderedTags = this.props.tags.map(tag => this.renderTag(tag))
    return (
        <div className="ProjectItem chivo" id={this.props.key}>
          <div className="piTitleWrap">
            <p className="piTitle"><a href={this.props.url}>{this.props.name}</a></p>
          </div>
          <div className="piTagsWrap">
            <div className="piTags">
              {renderedTags}
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

export default connect(null)(ProjectItem)