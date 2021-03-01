import React, {useState} from "react";
import emailjs from 'emailjs-com';
import './Contact.elements.css';
import FlashMessage from "react-flash-message";
import Pulse from 'react-reveal/Pulse';

export default function ContactForm() {
    const [status, setStatus] = useState(false);
    const sendEmail = e =>{
        e.preventDefault();
        setStatus(true);

        emailjs.sendForm('service_5or4kmz', 'template_home', e.target, 'user_NMVZ37RFNdsU15Wtvxjnc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return(
        <>
                <form onSubmit={sendEmail}>
                    <div className="wrapper">
                        <div className="right">
                            <div className="field">
                                <input type="text" name="name" id="name" placeholder="Full name" />
                            </div>
                            <div className="field">
                                <input type="text" name="subject" id="subject" placeholder="Subject" />
                            </div>
                            <div className="field">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <input type="text" name="phone" id="phone" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="left">
                            <div className="field">
                                <textarea type="text" name="message" id="message" placeholder="Message" />
                            </div>
                            <input type="submit" value="send Message"/>
                            {status && (
                                <Pulse>
                                    <FlashMessage duration={5000}>
                                        <div className="flash">Your message has been sent !</div>
                                    </FlashMessage>
                                </Pulse>
                            )}
                        </div>
                    </div>
                </form>
        </>
    )
}
