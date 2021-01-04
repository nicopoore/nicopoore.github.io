import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contact extends Component {
  render() {
    const lang = this.props.lang
    return (
      <div className="Contact main-section" id="contact">
        <p className="playfair subheading" id="contact-sub">{this.props.lang === 'en' ? 'Contact' : 'Contacto'}</p>
        <div id="contactContentWrapper">
          <div id="contactForm">
            <form>
              <input className="formItem chivo" type="text" placeholder={lang === 'en' ? 'NAME' : 'NOMBRE'} value={this.props.value} required />
              <input className="formItem chivo" type="email" placeholder="EMAIL" required />
              <textarea className="formItem chivo" placeholder={lang === 'en' ? 'MESSAGE' : 'MENSAJE'} required />
              <button className="formItem chivo" type="submit" id="submitForm">{lang === 'en' ? 'SUBMIT' : 'ENVIAR'}</button>
            </form>
          </div>
          <div id="contactInfo">
            <div id="infoItems">
              <ul className="chivo">
                <li><FontAwesomeIcon icon={faMapMarkerAlt} className="infoItemsIcon" fixedWidth />{this.props.contact.location}</li>
                <li><FontAwesomeIcon icon={faEnvelope} className="infoItemsIcon" fixedWidth />{this.props.contact.email}</li>
                <li><FontAwesomeIcon icon={faPhoneAlt} className="infoItemsIcon" fixedWidth />{this.props.contact.phone}</li>
              </ul>
            </div>
            <div id="infoLinksWrapper">
              <div id="infoLinks">
                <ul>
                  <li><a href={this.props.contact.github} target="_blank"><button><FontAwesomeIcon icon={faGithub} /></button></a></li>
                  <li><a href={this.props.contact.linkedin} target="_blank"><button><FontAwesomeIcon icon={faLinkedinIn} /></button></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  contact: state.contact
})

export default connect(mapStateToProps)(Contact)