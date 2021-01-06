import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimelineItem from './TimelineItem'

class Experience extends Component {

  renderExperiences = (item) => {
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

  rendered = () => this.props.experienceArray.reverse().map(item => this.renderExperiences(item))

  render() {
    return (
      <section className="Experience" id="work">
        <h2 className="subheading">{this.props.lang === 'en' ? 'Work Experience' : 'Experiencia laboral'}</h2>
        <ol>
          {this.rendered()}
        </ol>
      </section>
    )
  }
}

/**/

const mapStateToProps = (state) => ({
  lang: state.lang,
  experienceArray: state.timelines.experienceArray
})

export default connect(mapStateToProps)(Experience)