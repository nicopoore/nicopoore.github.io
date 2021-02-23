import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {Component} from 'react'
import { connect } from 'react-redux'


const Sidebar = (props) => {

  const handleClick = () => {
    props.dispatch({
      type: 'TOGGLE_SIDEBAR',
      showSidebarMobile: false
    })
  }

  const langEng = () => {
    if(props.lang === 'es') {
      props.dispatch({
        type: 'TOGGLE_LANG',
        lang: 'en'
      })
    }
  }

  const langSpa = () => {
    if(props.lang === 'en') {
      props.dispatch({
        type: 'TOGGLE_LANG',
        lang: 'es'
      })
    }
  }

    return (
      <div className="Sidebar" id={props.showSidebarMobile === true ? "sidebarActive" : ""}>
        <div className={`sidebarMain hidden-xs ${props.showSidebarMain === true ? "shownMain" : "hiddenMain"}`}>
          <img src="profile.jpg" className="text-center round no-select" alt="Nicolas Poore" />
          <h3>Nicolás C. Poore</h3>
          <p>{props.lang === 'en' ? 'Full Stack Developer' : "Desarrollador Full Stack"}</p>
          <p>Buenos Aires, Argentina</p>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#about" className={props.activeSection === 'about-link' ? 'activeSection' : undefined} id="about-link" onClick={handleClick}>
                {props.lang === 'en' ? 'About' : "Sobre mi"}
              </a>
            </li>
            <li>
              <a href="#work" className={props.activeSection === 'work-link' ? 'activeSection' : undefined} id="work-link" onClick={handleClick}>
                {props.lang === 'en' ? 'Work Experience' : "Experiencia laboral"}
              </a>
            </li>
            <li>
              <a href="#education" className={props.activeSection === 'education-link' ? 'activeSection' : undefined} id="education-link" onClick={handleClick}>
                {props.lang === 'en' ? 'Education' : "Educación"}
              </a>
            </li>
            <li>
              <a href="#skills" className={props.activeSection === 'skills-link' ? 'activeSection' : undefined} id="skills-link" onClick={handleClick}>
                {props.lang === 'en' ? 'Skills' : "Conocimientos"}
              </a>
            </li>
            <li>
              <a href="#projects" className={props.activeSection === 'projects-link' ? 'activeSection' : undefined} id="projects-link" onClick={handleClick}>
                {props.lang === 'en' ? 'Projects' : "Proyectos"}
              </a>
            </li>
            <li>
              <a href="#contact" className={props.activeSection === 'contact-link' ? 'activeSection' : undefined} id="contact-link" onClick={handleClick}>
                {props.lang === 'en' ? 'Contact' : "Contacto"}
              </a>
            </li>
            <li>
              <a href={props.lang === 'en' ? 'CV-en.pdf' : 'CV-es.pdf'} target="_blank" rel="noreferrer" className={props.activeSection === 'resume-link' ? 'activeSection' : undefined} id="resume-link" onClick={handleClick}>
                {props.lang === 'en' ? 'Resume (En)' : 'CV (Es)'} <FontAwesomeIcon icon={faExternalLinkAlt} className="extIcon" />
              </a>
            </li>
          </ul>
        </nav>
        <div id="langToggle">
          <span className={props.lang === 'en' ? 'activeLang' : 'inactiveLang'} onClick={langEng}>English</span>
          <span className={props.lang === 'en' ? 'inactiveLang' : 'activeLang'} onClick={langSpa}>Español</span>
        </div>
        <div className="chivo" id="copyright">
          <p><a href="https://github.com/nicopoore/nicopoore.github.io" target="_blank" rel="noreferrer">{props.lang === 'en' ? 'Created by' : 'Creado por'} Nicolás Cedric Poore</a></p>
          <p><a href="https://github.com/nicopoore/nicopoore.github.io/blob/main/LICENSE" target="_blank" rel="noreferrer">GNU AGP License v3.0 &#169; 2021</a></p>
        </div>
      </div>
    )

}

const mapStateToProps = (state) => ({
  lang: state.lang,
  showSidebarMobile: state.showSidebarMobile,
  showSidebarMain: state.showSidebarMain,
  activeSection: state.activeSection
})

export default connect(mapStateToProps)(Sidebar)