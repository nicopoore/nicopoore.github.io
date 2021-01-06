import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
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

  langEng = () => {
    if(this.props.lang === 'es') {
      this.props.dispatch({
        type: 'TOGGLE_LANG',
        lang: 'en'
      })
    }
  }

  langSpa = () => {
    if(this.props.lang === 'en') {
      this.props.dispatch({
        type: 'TOGGLE_LANG',
        lang: 'es'
      })
    }
  }

  render() {
    return (
      <div className="Sidebar" id={this.props.showSidebarMobile === true ? "sidebarActive" : ""}>
        <div className={`sidebarMain hidden-xs ${this.props.showSidebarMain === true ? "shownMain" : "hiddenMain"}`}>
          <img src="profile.jpg" className="text-center round no-select" alt="Nicolas Poore" />
          <h3>Nicolás C. Poore</h3>
          <p>{this.props.lang === 'en' ? 'Full Stack Developer' : "Desarrollador Full Stack"}</p>
          <p>Buenos Aires, Argentina</p>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#about" className={this.props.activeSection === 'about-link' ? 'activeSection' : undefined} id="about-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'About' : "Sobre mi"}
              </a>
            </li>
            <li>
              <a href="#work" className={this.props.activeSection === 'work-link' ? 'activeSection' : undefined} id="work-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Work Experience' : "Experiencia laboral"}
              </a>
            </li>
            <li>
              <a href="#education" className={this.props.activeSection === 'education-link' ? 'activeSection' : undefined} id="education-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Education' : "Educación"}
              </a>
            </li>
            <li>
              <a href="#skills" className={this.props.activeSection === 'skills-link' ? 'activeSection' : undefined} id="skills-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Skills' : "Conocimientos"}
              </a>
            </li>
            <li>
              <a href="#projects" className={this.props.activeSection === 'projects-link' ? 'activeSection' : undefined} id="projects-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Projects' : "Proyectos"}
              </a>
            </li>
            <li>
              <a href="#contact" className={this.props.activeSection === 'contact-link' ? 'activeSection' : undefined} id="contact-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Contact' : "Contacto"}
              </a>
            </li>
            <li>
              <a href={this.props.lang === 'en' ? 'CV-en.pdf' : 'CV-es.pdf'} target="_blank" rel="noreferrer" className={this.props.activeSection === 'resume-link' ? 'activeSection' : undefined} id="resume-link" onClick={this.handleClick}>
                {this.props.lang === 'en' ? 'Resume (En)' : 'CV (Es)'} <FontAwesomeIcon icon={faExternalLinkAlt} className="extIcon" />
              </a>
            </li>
          </ul>
        </nav>
        <div id="langToggle">
          <span className={this.props.lang === 'en' ? 'activeLang' : 'inactiveLang'} onClick={this.langEng}>English</span>
          <span className={this.props.lang === 'en' ? 'inactiveLang' : 'activeLang'} onClick={this.langSpa}>Español</span>
        </div>
        <div className="chivo" id="copyright">
          <p><a href="https://github.com/nicopoore/nicopoore.github.io" target="_blank" rel="noreferrer">{this.props.lang === 'en' ? 'Created by' : 'Creado por'} Nicolás Cedric Poore</a></p>
          <p><a href="https://github.com/nicopoore/nicopoore.github.io/blob/main/LICENSE" target="_blank" rel="noreferrer">GNU General Public License v3.0 &#169; 2021</a></p>
        </div>
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