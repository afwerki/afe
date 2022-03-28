
import React from 'react'
import './styles/Contact.scss'
import Header from './Header'

const Contact = () => {
    return (
        <div className='contact'>
            <Header/>
            
            <div className="inputs">
                <h1>Contact us</h1>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Contact
