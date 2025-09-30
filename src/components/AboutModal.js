import React from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                {/* Profile Card Layout */}
                <div className="body">
                    <div className="header">
                        <div className="searchbar">https://aboutme.com</div>
                        <div className="searchbutton">search</div>
                        <img src="https://files.catbox.moe/ywyzay.png" className="houseicon" alt="home" />
                        <img src="https://files.catbox.moe/warcz9.png" className="hearticon" alt="heart" />
                        <img src="https://files.catbox.moe/1wfwv2.png" className="menuicon" alt="menu" />
                    </div>

                    <div className="box">
                        <img
                            src="https://i.pinimg.com/736x/ef/9f/d7/ef9fd736db403fec9d6eee4191f206d7.jpg"
                            className="pfp"
                            alt="Profile"
                        />
                        <div className="status"><b><i>Kavya</i></b> Saketharaman</div>

                        <div className="biobox">
                            <div className="biotext">
                                born on 5th jan 2003, currently in the UK finished my masters degree.
                            </div>
                        </div>

                        <div className="aboutme">
                            <div className="aboutmetext">
                                <b>about me:</b> Computer Science Master's graduate passionate about building smart digital solutions. From web and mobile apps to AI, cloud, and Unity projects, I love turning ideas into innovative and impactful tech.
                            </div>
                        </div>

                        <div className="dni">
                            <div className="dnitext">
                                <b>Interest</b> reading books, coding, playing games and going to tech meet ups.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;