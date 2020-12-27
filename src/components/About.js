import React, { Component } from 'react'
import { connect } from 'react-redux'

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


    if (scrolled <= .2) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: false,
        activeSection: 'about-link'
      })
    } else if (scrolled >= .25 && scrolled < .50) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'work-link'
      })
    } else if (scrolled >= .50 && scrolled < .75) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'education-link'
      })
    } else if (scrolled >= .75 && scrolled < 1) {
      this.props.dispatch({
        type: 'TOGGLE_SECTION',
        showSidebarMain: true,
        activeSection: 'skills-link'
      })
    }
  }

  render() {
    return (
      <div className="About" id="about">
        <img src="profile.jpg" className="round no-select" id="aboutPic" />
        <h1 class="playfair no-select" id="mainTitle">Nicolás Cedric Poore</h1>
        <h2 class="chivo no-select" id="mainSubtitle">Full Stack Developer &nbsp;|&nbsp;  Buenos Aires, Argentina</h2>
        <p className="aboutParagraph chivo">
          Currently working with multinational Kaeser Kompressoren in the Engineering department. At the moment studying Advanced JavaScript Development (including frameworks with a MERN stack focus). Experienced in Web Development, 3D design, Adobe Creative Suite. Strong design and management professional with a Full Stack Web Development Certification focused in Computer Software Engineering from FCC. 
        </p>
        <p className="aboutParagraph chivo">
          On my free time I love watching movies (you can find me on Letterboxd!), playing the piano (and sucking at the guitar), programming, and learning.
        </p>
      </div>
    )
  }
}

/*const About = (props) => {
  return (
    <div className="About">
      <img src="profile.jpg" className="roundPic" id="aboutPic" />
      <h1 id="mainTitle">Nicolás Cedric Poore</h1>
      <h2 id="mainSubtitle">Full Stack Developer &nbsp;|&nbsp;  Buenos Aires, Argentina</h2>
      <p className="aboutParagraph">
        Currently working with multinational Kaeser Kompressoren in the Engineering department. At the moment studying Advanced JavaScript Development (including frameworks with a MERN stack focus). Experienced in Web Development, 3D design, Adobe Creative Suite. Strong design and management professional with a Full Stack Web Development Certification focused in Computer Software Engineering from FCC. 
      </p>
      <p className="aboutParagraph">
        On my free time I love watching movies (you can find me on Letterboxd!), playing the piano (and sucking at the guitar), programming, and learning.
      </p>
      <button onClick={props.dispatch({type: 'TOGGLE_SIDEBAR_MAIN', showSidebarMain: !props.showSidebarMain})} />
    </div>
  )
}

/**/

const mapStateToProps = (state) => ({
  showSidebarMain: state.showSidebarMain
})

export default connect(mapStateToProps)(About)