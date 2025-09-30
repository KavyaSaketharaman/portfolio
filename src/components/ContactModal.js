import React from 'react';
import './ContactModal.css';

const ContactModal = ({ onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal contact-modal" onClick={handleBackdropClick}>
            <div className="modal-content ps-vita">
                <span className="close" onClick={onClose}>&times;</span>

                {/* Vita image */}
                <img src="/images/psvita.png" alt="PS Vita" className="vita-img" />

                {/* Vita screen (text area) */}
                <div className="vita-screen">
                    <h2>Contact Me</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <strong>Email:</strong>
                            <a href="mailto:kavya.saketharaman@example.com">kavya.saketharaman@example.com</a>
                        </div>

                        <div className="contact-item">
                            <strong>LinkedIn:</strong>
                            <a href="https://linkedin.com/in/kavyasaketharaman" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/kavyasaketharaman
                            </a>
                        </div>

                        <div className="contact-item">
                            <strong>GitHub:</strong>
                            <a href="https://github.com/kavyasaketharaman" target="_blank" rel="noopener noreferrer">
                                github.com/kavyasaketharaman
                            </a>
                        </div>

                        <div className="contact-item">
                            <strong>Location:</strong>
                            <span>United Kingdom</span>
                        </div>

                        <div className="contact-item">
                            <strong>Available for:</strong>
                            <ul>
                                <li>Full-time software development roles</li>
                                <li>Freelance projects</li>
                                <li>Collaboration opportunities</li>
                                <li>Tech meetups and networking</li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact-footer">
                        <p>Let's connect and build something amazing together!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;