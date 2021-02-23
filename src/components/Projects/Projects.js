import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectItem from './ProjectItem'
import ProjectTag from './ProjectTag'

const Projects = (props) => {

  const renderProjects = (item) => {
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

  const renderTag = (item) => {
    return (
      <ProjectTag 
        tag={item}
        type='remove'
      />
    )
  }

  const resetFilter = () => {
    props.dispatch({
      type: 'RESET_FILTER',
    })
  }

  const filterArray = props.projectFilter.length === 0 ? [] : props.projectFilter
  const renderedProjects = props.projects.filter(project => filterArray.every(val => project.tags.indexOf(val) !== -1) && project.id !== 1 && project.id !== 9 && project.id !== 11 && project.id !== 8 && project.id !== 4).reverse().map((item) => renderProjects(item))
  const renderedFilter = props.projectFilter.reverse().map(item => renderTag(item))

  return (
    <section className="Projects" id="projects">
      <h2 className="subheading">{props.lang === 'en' ? 'Projects' : 'Proyectos'}</h2>
      <div id="appliedFilters" style={{marginBottom: (props.projectFilter.length !== 0 ? -2.1 : 0) + "rem"}}>
        {renderedFilter}
        {props.projectFilter.length !== 0 && <span className="resetFilterButton" onClick={resetFilter}><FontAwesomeIcon icon={faEraser} /></span>}
      </div>
      <div className="chivo" id="projectsWrapper">
        {renderedProjects}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  projects: state.projects,
  projectFilter: state.projectFilter
})

export default connect(mapStateToProps)(Projects)