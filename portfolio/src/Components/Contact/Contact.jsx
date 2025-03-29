import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1>CONTACT</h1>
            <div className='contactinput'>           
                 <div className="leftcontact">
                <div className='imgsect'><img src="" alt="" /></div>
            </div>
            <div className="rightcontact">
                <form className='form' action="">
                    <div className='inp-group'><label htmlFor="name1">Name :</label>
                    <input type="text" name="name" id="name1" /></div>
                    <div className='inp-group'><label htmlFor="email1">Email  :</label>
                    <input type="email" name="email" id="email1" /></div>
                    <div className='inp-group'>  <label htmlFor="message1">Message</label><br />
                    <input type="text" name='message' id='message1' /></div>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
        </div>

    )
}

export default Contact
