import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { about as enAbout } from '../../rawData/enContent.json'
import { about as esAbout } from '../../rawData/esContent.json'

const About = (props) => {

  const toggleDarkMode = () => {
    document.documentElement.style.setProperty('--root-bg', props.darkMode ? 'white' : '#101010')
    props.dispatch({
      type: 'TOGGLE_DARKMODE',
      darkMode: !props.darkMode
    })
  }

  const about = props.lang === 'en' ? enAbout : esAbout

  return (
    <section className="About" id="about">
      <button id="toggleDarkButton" onClick={toggleDarkMode}><FontAwesomeIcon icon={props.darkMode ? faSun : faMoon} /></button>
      <img src="profile.jpg" alt="Nicolas Poore" />
      <h1 className="playfair no-select">Nicolás <span>Cedric</span> Poore</h1>
      <h2 className="chivo no-select sm-hidden lg-shown">{props.lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'} &nbsp;|&nbsp; Buenos Aires, Argentina</h2>
      <h2 className="chivo no-select sm-shown lg-hidden">{props.lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'}<br/>Buenos Aires, Argentina</h2>

      {about.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  darkMode: state.darkMode,
})

export default connect(mapStateToProps)(About)