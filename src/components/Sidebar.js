import { faExternalLinkAlt, faFile, faFileWord, faGlobe, faGlobeAmericas, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {Component} from 'react'
import { connect } from 'react-redux'


class Sidebar extends Component {

  handleClick = () => {
    this.props.dispatch({
      type: 'TOGGLE_SIDEBAR',
      showSidebarMobile: false
    })
  }

  changeLang = () => {
    const newLang = this.props.lang === 'en' ? 'es' : 'en'
    this.props.dispatch({
      type: 'TOGGLE_LANG',
      lang: newLang
    })
  }

  render() {
    return (
      <div className="Sidebar" id={this.props.showSidebarMobile === true ? "sidebarActive" : ""}>
        <div className={this.props.showSidebarMain === true ? "sidebarMain hidden-xs shownMain" : "sidebarMain hidden-xs hiddenMain"}>
          <img src="profile.jpg" className="text-center round no-select" id="sidebarPic" alt="Nicolas Poore" />
          <h3 className="text-center playfair" id="sidebarName">Nicolás C. Poore</h3>
          <p className="text-center chivo sidebarSubtitle">{this.props.lang === 'en' ? 'Full Stack Developer' : "Desarrollador Full Stack"}</p>
          <p className="text-center chivo sidebarSubtitle">Buenos Aires, Argentina</p>
        </div>

        <nav>
          <ul className="sidebarList">
            <li className="sidebarItem chivo">
              <a href="#about" className={this.props.activeSection === 'about-link' && 'activeSection'} id="about-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'About' : "Sobre mi"}
              </a>
            </li>
            <li className="sidebarItem chivo">
              <a href="#work" className={this.props.activeSection === 'work-link' && 'activeSection'} id="work-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Work Experience' : "Experiencia laboral"}
              </a>
            </li>
            <li className="sidebarItem chivo">
              <a href="#education" className={this.props.activeSection === 'education-link' && 'activeSection'} id="education-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Education' : "Educación"}
              </a>
            </li>
            <li className="sidebarItem chivo">
              <a href="#skills" className={this.props.activeSection === 'skills-link' && 'activeSection'} id="skills-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Skills' : "Conocimientos"}
              </a>
            </li>
            <li className="sidebarItem chivo">
              <a href="#projects" className={this.props.activeSection === 'projects-link' && 'activeSection'} id="projects-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Projects' : "Proyectos"}
              </a>
            </li>
            <li className="sidebarItem chivo">
              <a href="#contact" className={this.props.activeSection === 'contact-link' && 'activeSection'} id="contact-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Contact' : "Contacto"}
              </a>
            </li>
            <li className="sidebarItem chivo">
              <a href="#resume" className={this.props.activeSection === 'resume-link' && 'activeSection'} id="resume-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Resume' : 'CV'} <FontAwesomeIcon icon={faExternalLinkAlt} className="extIcon" />
              </a>
            </li>
          </ul>
        </nav>
        <span className="langChangeSpan chivo" onClick={this.changeLang}><FontAwesomeIcon icon={faGlobeAmericas} /><span className="langChangeName"> {this.props.lang === 'en' ? 'English' : 'Español'}</span></span>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  lang: state.lang,
  showSidebarMobile: state.showSidebarMobile,
  showSidebarMain: state.showSidebarMain,
  activeSection: state.activeSection
})

export default connect(mapStateToProps)(Sidebar)