import React from 'react'
import ContactIcon from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/phoneimg.svg"
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/header/contact/Contact.css"

function Contact() {
  return (
    <div className='contact-button'>
        <img className='contact-icon' src={ContactIcon} />
        <div className='contact-inner'>
            <span className='text-info'>Contact Us</span>
            <span className='text-number'>123 456 789 0</span>
        </div>
    </div>
  )
}

export default Contact
