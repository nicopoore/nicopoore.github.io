import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectItem from './ProjectItem'
import ProjectTag from './ProjectTag'

class Projects extends Component {

  renderProjects = (item) => {
    return (
      <ProjectItem 
        key={item.id}
        name={item.name}
        url={item.url}
        tags={item.tags}
        repo={item.repo}
      />
    )
  }

  renderTag = (item) => {
    return (
      <ProjectTag 
        tag={item}
        type='remove'
      />
    )
  }

  resetFilter = () => {
    this.props.dispatch({
      type: 'RESET_FILTER',
    })
  }

  render() {
    const filterArray = this.props.projectFilter.length == 0 ? ['javascript'] : this.props.projectFilter
    const renderedProjects = this.props.projects.filter(project => filterArray.every((val) => project.tags.indexOf(val) !== -1)).reverse().map((item) => this.renderProjects(item))
    const renderedFilter = this.props.projectFilter.reverse().map(item => this.renderTag(item))
    return (
      <div className="Projects main-section" id="projects">
        <p className="playfair subheading" id="projectsSub">{this.props.lang === 'en' ? 'Projects' : 'Proyectos'}</p>
        <div id="appliedFilters" style={{marginBottom: (this.props.projectFilter.length != 0 ? -2.1 : 0) + "rem"}}>
          {renderedFilter}
          {this.props.projectFilter.length != 0 && <span className="resetFilterButton" onClick={this.resetFilter}><FontAwesomeIcon icon={faEraser} /></span>}
        </div>
        <div style={{marginTop: 2.6 + "rem"}}>
          {renderedProjects}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  projects: state.projects,
  projectFilter: state.projectFilter
})

export default connect(mapStateToProps)(Projects)