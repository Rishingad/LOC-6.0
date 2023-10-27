"use client"
import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cysg2mv', 'template_h16hwic', form.current, 'FfimH9f-XbJMWlk3X')
            .then(() => {
                alert("Message Sent Successfully. We will try to reply ASAP.")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Something Error occured. Please check interent connection.");
            });
    };

    return (
        <>
            <div id='contact' className="heading">
                <h1 className="head">SELECT * FROM CONTACT</h1>
            </div>
            <div className="main_form">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="first">
                        <div className="name">
                            <label htmlFor="name">Company Name</label>
                            <input name='c_name' type="text" id="name" required />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input name='email' type="email" id="email" required />
                        </div>
                    </div>
                    <div className="second">
                        <div className="nation">
                            <label htmlFor="nation">Nationality</label>
                            <input name='nation' type="text" id="nation" required />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">Phone</label>
                            <input name='phone' type="phone" id="phone" required />
                        </div>
                    </div>
                    <div className="msg">
                        <label htmlFor="name">Message</label>
                        <textarea name='msg' id="msg" rows="4" cols="30" required ></textarea>
                    </div>
                    <div className="btn">
                        <button id="btn_send" className="send">Send Email</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
