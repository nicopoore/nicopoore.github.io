import React from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

const Experience = (props) => {

  const renderExperiences = (item) => {
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

  const rendered = () => props.experienceArray.slice().reverse().map(item => renderExperiences(item))

  return (
    <section className="Experience" id="work">
      <h2 className="subheading">{props.lang === 'en' ? 'Work Experience' : 'Experiencia laboral'}</h2>
      <ol>
        {rendered()}
      </ol>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  experienceArray: state.timelines.experienceArray
})

export default connect(mapStateToProps)(Experience)