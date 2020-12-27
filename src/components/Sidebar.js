import React, {Component} from 'react'
import { connect } from 'react-redux'


class Sidebar extends Component {

  handleClick = () => {
    this.props.dispatch({
      type: 'TOGGLE_SIDEBAR',
      showSidebarMobile: false
    })
  }

  render() {
    return (
      <div className="Sidebar" id={this.props.showSidebarMobile === true ? "sidebarActive" : ""}>
        <div className={this.props.showSidebarMain === true ? "sidebarMain hidden-xs shownMain" : "sidebarMain hidden-xs hiddenMain"}>
          <img src="profile.jpg" className="text-center round no-select" id="sidebarPic" alt="Nicolas Poore" />
          <h3 className="text-center playfair" id="sidebarName">Nicolás C. Poore</h3>
          <p className="text-center chivo sidebarSubtitle">Full Stack Developer</p>
          <p className="text-center chivo sidebarSubtitle">Buenos Aires, Argentina</p>
        </div>

        <ul className="sidebarList">
          <li className="sidebarItem chivo">
            <a href="#about" className={this.props.activeSection === 'about-link' ? 'activeSection' : ''} id="about-link" onClick={this.handleClick}>
              About
            </a>
          </li>
          <li className="sidebarItem chivo">
            <a href="#work" className={this.props.activeSection === 'work-link' ? 'activeSection' : ''} id="work-link" onClick={this.handleClick}>
              Work Experience
            </a>
          </li>
          <li className="sidebarItem chivo">
            <a href="#education" className={this.props.activeSection === 'education-link' ? 'activeSection' : ''} id="education-link" onClick={this.handleClick}>
              Education
            </a>
          </li>
          <li className="sidebarItem chivo">
            <a href="#skills" className={this.props.activeSection === 'skills-link' ? 'activeSection' : ''} id="skills-link" onClick={this.handleClick}>
              Skills
            </a>
          </li>
          <li className="sidebarItem chivo">
            <a href="#projects" className={this.props.activeSection === 'projects-link' ? 'activeSection' : ''} id="projects-link" onClick={this.handleClick}>
              Personal Projects
            </a>
          </li>
          <li className="sidebarItem chivo">
            <a href="#resume" className={this.props.activeSection === 'resume-link' ? 'activeSection' : ''} id="resume-link" onClick={this.handleClick}>
              Resume
            </a>
          </li>
          <li className="sidebarItem chivo">
            <a href="#contact" className={this.props.activeSection === 'contact-link' ? 'activeSection' : ''} id="contact-link" onClick={this.handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  showSidebarMobile: state.showSidebarMobile,
  showSidebarMain: state.showSidebarMain,
  activeSection: state.activeSection
})

export default connect(mapStateToProps)(Sidebar)