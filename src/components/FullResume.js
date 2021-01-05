import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sidebar, About, Experience, Education, Skills, Hamburger, Divider, Projects, Contact } from '.'

class AppChild extends Component {

  render() {
    const darkModeClass = this.props.darkMode ? 'darkMode' : 'lightMode'
    return (
        <div className={`App ${darkModeClass}`}>
          <Hamburger />
          <Sidebar />
          <div id="Main">
            <About />
            <Divider type="one" />
            <Experience />
            <Divider type="two" />
            <Education />
            <Divider type="one" />
            <Skills />
            <Divider type="two" />
            <Projects />
            <Divider type="one" />
            <Contact />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode
})

export default connect(mapStateToProps)(AppChild)