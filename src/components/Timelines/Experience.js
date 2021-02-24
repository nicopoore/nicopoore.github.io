import React from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'
import { timelines as enTimelines } from '../../rawData/enContent.json'
import { timelines as esTimelines } from '../../rawData/esContent.json'

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
  
  const timelines = props.lang === 'en' ? enTimelines : esTimelines
  const rendered = () => timelines.experienceArray.slice().reverse().map(item => renderExperiences(item))

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
})

export default connect(mapStateToProps)(Experience)