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
    const filterArray = this.props.projectFilter.length === 0 ? ['javascript'] : this.props.projectFilter
    const renderedProjects = this.props.projects.filter(project => filterArray.every(val => project.tags.indexOf(val) !== -1) && project.id !== 1 && project.id !== 9 && project.id !== 11).reverse().map((item) => this.renderProjects(item))
    const renderedFilter = this.props.projectFilter.reverse().map(item => this.renderTag(item))
    return (
      <section className="Projects" id="projects">
        <h2 className="subheading">{this.props.lang === 'en' ? 'Projects' : 'Proyectos'}</h2>
        <div id="appliedFilters" style={{marginBottom: (this.props.projectFilter.length !== 0 ? -2.1 : 0) + "rem"}}>
          {renderedFilter}
          {this.props.projectFilter.length !== 0 && <span className="resetFilterButton" onClick={this.resetFilter}><FontAwesomeIcon icon={faEraser} /></span>}
        </div>
        <div className="chivo" id="projectsWrapper">
          {renderedProjects}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  projects: state.projects,
  projectFilter: state.projectFilter
})

export default connect(mapStateToProps)(Projects)