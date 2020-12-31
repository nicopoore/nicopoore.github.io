import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class ProjectItem extends Component {

  addToFilter = () => {
    if (!this.props.projectFilter.includes(this.props.tag)) {
      this.props.dispatch({
        type: 'ADD_FILTER',
        tag: this.props.tag
      })
    }
  }

  removeFromFilter = () => {
    const updatedFilter = [...this.props.projectFilter]
    const index = updatedFilter.indexOf(this.props.tag)
    updatedFilter.splice(index, 1)
    console.log(updatedFilter)
    this.props.dispatch({
      type: 'REMOVE_FILTER',
      projectFilter: updatedFilter
    })
  }

  render() {
    const type = this.props.type
    return (
      <button onClick={this.addToFilter} className={`chivo piTag no-sselect ${this.props.tag}`}>
        <span className={`piTagText ${type === 'add' && 'piTagTextIcon'}`}>{this.props.tag}</span>
        {type === 'remove' && <span className="x-icon" onClick={this.removeFromFilter}><FontAwesomeIcon icon={faTimes} /></span>}
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  projectFilter: state.projectFilter
})

export default connect(mapStateToProps)(ProjectItem)