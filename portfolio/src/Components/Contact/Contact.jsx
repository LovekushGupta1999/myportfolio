import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="leftcontact">
                <div className='imgsect'><img src="" alt="" /></div>
            </div>
            <div className="rightcontact">
                <form action="">
                    <label htmlFor="name1">Name :</label>
                    <input type="text" name="name" id="name1" />
                    <label htmlFor="email1">Email I'd :</label>
                    <input type="email" name="email" id="email1" />
                    <label htmlFor="message1">Message</label>
                </form>
            </div>
        </div>
    )
}

export default Contact
