import React from 'react'
import "./contact.css"
import contact from "../../assets/contact.png"
const Contact = () => {
  return (
    <div id='contact'>
        <div id="contact">
            <div className="leftcontact">
                <img src={contact} alt="contact" />
            </div>
            <div className="rightcontact">
                <form action="https://formspree.io/f/mdkzplja" method='POST'>
                <input type="text" placeholder='Name' name = "user_name" />
                <input type="email" placeholder='Email' name = "user_email" />
                <textarea placeholder='Message' name = "user_message" id='textArea' rows="5" />
                <input type="submit" id='submitBtn' value="Send" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact