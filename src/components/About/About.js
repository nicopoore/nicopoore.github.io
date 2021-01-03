import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

class About extends Component {
  constructor(props) {
    super(props);
    this.listenToScroll = this.listenToScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height


    if (scrolled <= .166) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: false,
        activeSection: 'about-link'
      })
    } else if (scrolled >= .166 && scrolled < .333) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'work-link'
      })
    } else if (scrolled >= .333 && scrolled < .5) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'education-link'
      })
    } else if (scrolled >= .5 && scrolled < .666) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'skills-link'
      })
    } else if (scrolled >= .666 && scrolled < .833) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'projects-link'
      })
    } else if (scrolled >= .833 && scrolled < 1) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'contact-link'
      })
    }
  }

  toggleDarkMode = () => {
    document.documentElement.style.setProperty('--root-bg', this.props.darkMode ? 'white' : '#101010')
    this.props.dispatch({
      type: 'TOGGLE_DARKMODE',
      darkMode: !this.props.darkMode
    })
  }

  render() {
    return (
      <div className="About main-section" id="about">
        <button className="toggleDarkButton" onClick={this.toggleDarkMode}><FontAwesomeIcon icon={this.props.darkMode ? faSun : faMoon} /></button>
        <img src="profile.jpg" className="round no-select" id="aboutPic" alt="Nicolas Poore" />
        <h1 className="playfair no-select" id="mainTitle">Nicolás <span className="cedric">Cedric</span> Poore</h1>
        <h2 className="chivo no-select sm-hidden lg-shown" id="mainSubtitle">{this.props.lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'} &nbsp;|&nbsp; Buenos Aires, Argentina</h2>
        <h2 className="chivo no-select sm-shown lg-hidden" id="mainSubtitle">{this.props.lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'}<br/>Buenos Aires, Argentina</h2>

        <p className="aboutParagraph chivo">{this.props.about[0]}</p>
        <p className="aboutParagraph chivo">{this.props.about[1]}</p>
        <p className="aboutParagraph chivo">{this.props.about[2]}</p>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  darkMode: state.darkMode,
  about: state.about
})

export default connect(mapStateToProps)(About)