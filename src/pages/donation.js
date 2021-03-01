import React, {useState} from "react";
import emailjs from 'emailjs-com';
import '../components/Contact/Contact.elements.css';
import FlashMessage from "react-flash-message";
import {DivClose} from "../components/Projects/Projects.elements";
import {HashLink as Link} from "react-router-hash-link";

export default function Donate() {
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
            <Link to='/#about'>
                <DivClose />
            </Link>
            <div className="container">
                <div class="entete">
                    <h1>You can be a change maker</h1>
                    <p>To donate to a specific program, please complete this donation form:</p>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="wrapper">
                        <div className="right">
                            <div className="field">
                                <input type="text" name="name" id="name" placeholder="Full name" />
                            </div>
                            <div className="field">
                                <input type="text" name="subject" id="subject" placeholder="Company" />
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
                                <FlashMessage duration={5000}>
                                    <div className="flash">Your message has been sent !</div>
                                </FlashMessage>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
