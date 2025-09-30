import React from 'react';
import './ContactWidget.css';

const ContactWidget = () => {
    const handleAudioToggle = () => {
        const audio = document.getElementById('contact-audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    return (
        <div id="contact-holder">



            <div className="contact-container">
                <svg viewBox="0 0 100 100" width="240" height="240">
                    <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                    </defs>
                    <text fontSize="1em" fontFamily="sweety">
                        <textPath xlinkHref="#circle">Contact</textPath>
                    </text>
                </svg>
            </div>

            <div className="contact-item1 contact-box">
                <h3>E-mail!</h3>
                <p>kavyasaketharaman<br></br>@gmail.com</p>
            </div>

            <div className="contact-item2 contact-box">
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/kavya-saketharaman-76a0a5266/" target="_blank" rel="noopener noreferrer">View Profile</a></p>
            </div>

            <div className="contact-item3 contact-box">
                <h3>Phone</h3>
                <p>+44 7405333139</p>
            </div>


        </div>
    );
};

export default ContactWidget;