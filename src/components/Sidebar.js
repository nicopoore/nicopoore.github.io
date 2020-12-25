import React from 'react'
import { connect } from 'react-redux'

const sidebarMain = 
  <div className="sidebarMain">
    <img src="profile.jpg" className="text-center round no-select" id="sidebarPic" />
    <h3 className="text-center playfair" id="sidebarName">Nicolás C. Poore</h3>
    <p className="text-center chivo sidebarSubtitle">Full Stack Developer</p>
    <p className="text-center chivo sidebarSubtitle">Buenos Aires, Argentina</p>
  </div>

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      {/* props.showSidebarMain === true && sidebarMain */}

      <div className={props.showSidebarMain === true ? "sidebarMain shownMain" : "sidebarMain hiddenMain"}>
        <img src="profile.jpg" className="text-center round no-select" id="sidebarPic" />
        <h3 className="text-center playfair" id="sidebarName">Nicolás C. Poore</h3>
        <p className="text-center chivo sidebarSubtitle">Full Stack Developer</p>
        <p className="text-center chivo sidebarSubtitle">Buenos Aires, Argentina</p>
      </div>

      <ul className="sidebarList">
        <li className="sidebarItem chivo">
          <a href="#about" className={props.activeSection === 'about-link' ? 'activeSection' : ''} id="about-link">
            About
          </a>
        </li>
        <li className="sidebarItem chivo">
          <a href="#work" className={props.activeSection === 'work-link' ? 'activeSection' : ''} id="work-link">
            Work Experience
          </a>
        </li>
        <li className="sidebarItem chivo">
          <a href="#education" className={props.activeSection === 'education-link' ? 'activeSection' : ''} id="education-link">
            Education
          </a>
        </li>
        <li className="sidebarItem chivo">
          <a href="#projects" className={props.activeSection === 'projects-link' ? 'activeSection' : ''} id="projects-link">
            Personal Projects
          </a>
        </li>
        <li className="sidebarItem chivo">
          <a href="#skills" className={props.activeSection === 'skills-link' ? 'activeSection' : ''} id="skills-link">
            Skills
          </a>
        </li>
        <li className="sidebarItem chivo">
          <a href="#resume" className={props.activeSection === 'resume-link' ? 'activeSection' : ''} id="resume-link">
            Resume
          </a>
        </li>
        <li className="sidebarItem chivo">
          <a href="#contact" className={props.activeSection === 'contact-link' ? 'activeSection' : ''} id="contact-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  showSidebarMain: state.showSidebarMain,
  activeSection: state.activeSection
})

export default connect(mapStateToProps)(Sidebar)