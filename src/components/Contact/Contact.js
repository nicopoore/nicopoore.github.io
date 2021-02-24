import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import emailjs from 'emailjs-com';

const Contact = (props) => {
  
  const initialState = { name: '', email: '', message: '', status: '' }
  const [state, setState] = useState(initialState)

  const onNameChange = (e) => {
	  setState({...state, name: e.target.value})
  }
  const onEmailChange = (e) => {
	  setState({...state, email: e.target.value})
  }
  const onMessageChange = (e) => {
	  setState({...state, message: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setState({...state, status: 'processing'})

    emailjs.sendForm('service_63wa0hd', 'template_o4cv7pz', e.target, 'user_fILpx29tAK6zs1Xdr1LUm')
      .then((res) => {
        setState({
          name: '',
          email: '',
          message: '',
          status: 'sent'
        })
        console.log(res.text)
      }, (err) => {
        setState({...state, status: 'error'})
        console.log(err.text)
      })
      .then(() => {
        setTimeout(() => {
          setState(initialState)
        }, 3000);
      })
  }

  const submit_text = () => {
    if (state.status === '') {
      return props.lang === 'en' ? 'SUBMIT' : 'ENVIAR'
    } else if (state.status === 'processing') {
      return props.lang === 'en' ? 'SENDING...' : 'ENVIANDO...'
    } else if (state.status === 'sent') {
      return props.lang === 'en' ? 'SENT!' : 'ENVIADO!'
    } else if (state.status === 'error') {
      return 'ERROR'
    }
  }

  const contact = {
    location: 'Vicente López, Buenos Aires',
    phone: '15-5526-4650',
    email: 'nicolaspoore@gmail.com',
    github: 'https://github.com/nicopoore',
    linkedin: 'https://www.linkedin.com/in/nicolas-poore/'
  }

  return (
    <section className="Contact" id="contact">
      <h2 className="subheading">{props.lang === 'en' ? 'Contact' : 'Contacto'}</h2>
      <div>
        <div id="contactForm">
          <form onSubmit={handleSubmit}>
            <input type="text" value={state.name} onChange={onNameChange} placeholder={props.lang === 'en' ? 'NAME' : 'NOMBRE'} required name="name" />
            <input type="email" value={state.email} onChange={onEmailChange} placeholder="EMAIL" required name="email" />
            <textarea value={state.message} onChange={onMessageChange} placeholder={props.lang === 'en' ? 'MESSAGE' : 'MENSAJE'} required name="message" />
            <input type="submit" value={submit_text()} />
          </form>
        </div>
        <div id="contactInfo">
          <div>
            <ul className="chivo">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />{contact.location}</li>
              <li><FontAwesomeIcon icon={faEnvelope} fixedWidth />{contact.email}</li>
              <li><FontAwesomeIcon icon={faPhoneAlt} fixedWidth />{contact.phone}</li>
            </ul>
          </div>
          <div> {/* Wrapper */}
            <div>
              <ul>
                <li><a href={contact.github} target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faGithub} /></button></a></li>
                <li><a href={contact.linkedin} target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faLinkedinIn} /></button></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  lang: state.lang,
})

export default connect(mapStateToProps)(Contact)