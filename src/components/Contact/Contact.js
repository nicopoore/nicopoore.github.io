import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submit: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onNameChange = (e) => {
	  this.setState({name: e.target.value})
  }

  onEmailChange = (e) => {
	  this.setState({email: e.target.value})
  }

  onMessageChange = (e) => {
	  this.setState({message: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const lang = this.props.lang
    return (
      <section className="Contact" id="contact">
        <h2 className="subheading">{this.props.lang === 'en' ? 'Contact' : 'Contacto'}</h2>
        <div>
          <div id="contactForm">
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder={lang === 'en' ? 'NAME' : 'NOMBRE'} required />
              <input type="email" value={this.state.email} onChange={this.onEmailChange} placeholder="EMAIL" required />
              <textarea value={this.state.message} onChange={this.onMessageChange} placeholder={lang === 'en' ? 'MESSAGE' : 'MENSAJE'} required />
              <button type="submit">{lang === 'en' ? 'SUBMIT' : 'ENVIAR'}</button>
            </form>
          </div>
          <div id="contactInfo">
            <div>
              <ul className="chivo">
                <li><FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />{this.props.contact.location}</li>
                <li><FontAwesomeIcon icon={faEnvelope} fixedWidth />{this.props.contact.email}</li>
                <li><FontAwesomeIcon icon={faPhoneAlt} fixedWidth />{this.props.contact.phone}</li>
              </ul>
            </div>
            <div> {/* Wrapper */}
              <div>
                <ul>
                  <li><a href={this.props.contact.github} target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faGithub} /></button></a></li>
                  <li><a href={this.props.contact.linkedin} target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faLinkedinIn} /></button></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  contact: state.contact
})

export default connect(mapStateToProps)(Contact)