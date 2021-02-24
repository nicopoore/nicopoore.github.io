import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProjectItem from './ProjectItem'
import ProjectTag from './ProjectTag'
import { projects as enProjects } from '../../rawData/enContent.json'
import { projects as esProjects } from '../../rawData/esContent.json'

const Projects = (props) => {
  const [projectFilter, setProjectFilter] = useState([])

  const renderProjects = (item) => {
    return (
      <ProjectItem 
        key={item.id}
        name={item.name}
        url={item.url}
        tags={item.tags}
        repo={item.repo}
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
      />
    )
  }

  const renderTag = (item) => {
    console.log(projectFilter)
    return (
      <ProjectTag 
        tag={item}
        type='remove'
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
      />
    )
  }

  const resetFilter = () => {
    setProjectFilter([])
  }

  const projects = props.lang === 'en' ? enProjects : esProjects
  const filterArray = projectFilter.length === 0 ? [] : projectFilter
  const renderedProjects = projects.filter(project => filterArray.every(val => project.tags.indexOf(val) !== -1) && project.id !== 1 && project.id !== 9 && project.id !== 11 && project.id !== 8 && project.id !== 4).reverse().map((item) => renderProjects(item))
  const renderedFilter = projectFilter.reverse().map(item => renderTag(item))

  return (
    <section className="Projects" id="projects">
      <h2 className="subheading">{props.lang === 'en' ? 'Projects' : 'Proyectos'}</h2>
      <div id="appliedFilters" style={{marginBottom: (projectFilter.length !== 0 ? -2.1 : 0) + "rem"}}>
        {renderedFilter}
        {projectFilter.length !== 0 && <span className="resetFilterButton" onClick={resetFilter}><FontAwesomeIcon icon={faEraser} /></span>}
      </div>
      <div className="chivo" id="projectsWrapper">
        {renderedProjects}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Projects)