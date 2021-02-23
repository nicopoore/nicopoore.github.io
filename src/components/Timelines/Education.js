import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

const Education = (props) => {

  const renderEducation = (item) => {
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

  const renderedFormal = () => props.formalEdArray.slice().reverse().map(item => renderEducation(item))
  const renderedPersonal = () => props.personalEdArray.slice().reverse().map(item => renderEducation(item))

  return (
    <section className="Education" id="education">
      <h2 className="subheading">{props.lang === 'en' ? 'Formal Education' : 'Educación formal'}</h2>
      <ol>
        {renderedFormal()}
      </ol>
      <h2 className="subheading">{props.lang === 'en' ? 'Personal Education' : 'Educación personal'}</h2>
      <ol>
        {renderedPersonal()}
      </ol>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  showSidebarMain: state.showSidebarMain,
  formalEdArray: state.timelines.formalEdArray,
  personalEdArray: state.timelines.personalEdArray
})

export default connect(mapStateToProps)(Education)