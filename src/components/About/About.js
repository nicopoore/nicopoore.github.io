import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const About = (props) => {

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  })

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height

    if (scrolled <= .166) {
      props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: false,
        activeSection: 'about-link'
      })
    } else if (scrolled >= .166 && scrolled < .3) {
      props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'work-link'
      })
    } else if (scrolled >= .3 && scrolled < .5) {
      props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'education-link'
      })
    } else if (scrolled >= .5 && scrolled < .7) {
      props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'skills-link'
      })
    } else if (scrolled >= .7 && scrolled < .9) {
      props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'projects-link'
      })
    } else if (scrolled >= .9 && scrolled < 1) {
      props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'contact-link'
      })
    }
  }

  const toggleDarkMode = () => {
    document.documentElement.style.setProperty('--root-bg', props.darkMode ? 'white' : '#101010')
    props.dispatch({
      type: 'TOGGLE_DARKMODE',
      darkMode: !props.darkMode
    })
  }

  return (
    <section className="About" id="about">
      <button id="toggleDarkButton" onClick={toggleDarkMode}><FontAwesomeIcon icon={props.darkMode ? faSun : faMoon} /></button>
      <img src="profile.jpg" alt="Nicolas Poore" />
      <h1 className="playfair no-select">Nicolás <span>Cedric</span> Poore</h1>
      <h2 className="chivo no-select sm-hidden lg-shown">{props.lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'} &nbsp;|&nbsp; Buenos Aires, Argentina</h2>
      <h2 className="chivo no-select sm-shown lg-hidden">{props.lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'}<br/>Buenos Aires, Argentina</h2>

      <p>{props.about[0]}</p>
      <p>{props.about[1]}</p>
      <p>{props.about[2]}</p>
      
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  darkMode: state.darkMode,
  about: state.about
})

export default connect(mapStateToProps)(About)