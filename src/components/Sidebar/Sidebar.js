import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import sidebarItems from '../../rawData/sidebarItems.json'

const Sidebar = (props) => {

  const [activeSection, setActiveSection] = useState('about-link')

  const handleClick = () => {
    props.setSidebarIsOpen(false)
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
      setActiveSection(() => 'about-link')
    } else if (scrolled >= .166 && scrolled < .3) {
      setActiveSection(() => 'work-link')
    } else if (scrolled >= .3 && scrolled < .5) {
      setActiveSection(() => 'education-link')
    } else if (scrolled >= .5 && scrolled < .7) {
      setActiveSection(() => 'skills-link')
    } else if (scrolled >= .7 && scrolled < .9) {
      setActiveSection(() => 'projects-link')
    } else if (scrolled >= .9 && scrolled < 1) {
      setActiveSection(() => 'contact-link')
    }
  }

  return (
    <div className="Sidebar" id={props.sidebarIsOpen === true ? "sidebarActive" : ""}>
      <div className={`sidebarMain hidden-xs ${activeSection !== 'about-link' ? "shownMain" : "hiddenMain"}`}>
        <img src="profile.jpg" className="text-center round no-select" alt="Nicolas Poore" />
        <h3>Nicolás C. Poore</h3>
        <p>{props.lang === 'en' ? 'Full Stack Developer' : "Desarrollador Full Stack"}</p>
        <p>Buenos Aires, Argentina</p>
      </div>

      <nav>
        <ul>
          {sidebarItems.map(item => (
            <li>
              <a href={`#${item.id}`} className={activeSection === `${item.id}-link` ? 'activeSection' : undefined} id={`${item.id}-link`} onClick={handleClick}>
                {props.lang === 'en' ? item.en : item.es}
              </a>
            </li>
          ))}
          <li>
            <a href={props.lang === 'en' ? 'CV-en.pdf' : 'CV-es.pdf'} target="_blank" rel="noreferrer" className={activeSection === 'resume-link' ? 'activeSection' : undefined} id="resume-link" onClick={handleClick}>
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
  activeSection: state.activeSection
})

export default connect(mapStateToProps)(Sidebar)