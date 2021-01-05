import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

class Education extends Component {

  renderEducation = (item) => {
    return (
      <TimelineItem
        id={item.id}
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        date={item.date}
        desc={item.desc}
      />
    )
  }

  render() {
    const renderedFormal = this.props.formalEdArray.reverse().map(item => this.renderEducation(item))
    const renderedPersonal = this.props.personalEdArray.reverse().map(item => this.renderEducation(item))
    return (
      <section className="Education" id="education">
        <h2 className="subheading">{this.props.lang === 'en' ? 'Formal Education' : 'Educación formal'}</h2>
        <ul>
          {renderedFormal}
        </ul>
        <h2 className="subheading">{this.props.lang === 'en' ? 'Personal Education' : 'Educación personal'}</h2>
        <ul>
          {renderedPersonal}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  showSidebarMain: state.showSidebarMain,
  formalEdArray: state.timelines.formalEdArray,
  personalEdArray: state.timelines.personalEdArray
})

export default connect(mapStateToProps)(Education)