import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFilter } from '@fortawesome/free-solid-svg-icons'

const ProjectItem = (props) => {

  const addToFilter = () => {
    console.log(props)
    if (!props.projectFilter?.includes(props.tag)) {
      props.setProjectFilter([...props.projectFilter, props.tag])
    }
  }

  const removeFromFilter = () => {
    const updatedFilter = [...props.projectFilter]
    const index = updatedFilter.indexOf(props.tag)
    updatedFilter.splice(index, 1)
    props.setProjectFilter(updatedFilter)
  }

  const type = props.type
  return (
    <button onClick={addToFilter} className={`chivo piTag ${props.tag} ${type === 'remove' ? 'addedTag' : ''}`}>
      {type === 'add' && <span className="filter-icon"><FontAwesomeIcon icon={faFilter} /></span>} <span className="piTagText">{props.tag}</span>
      {type === 'remove' && <span className="x-icon" onClick={removeFromFilter}><FontAwesomeIcon icon={faTimes} /></span>}
    </button>
  )
}

export default ProjectItem