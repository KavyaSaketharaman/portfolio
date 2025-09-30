import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import AboutModal from './components/AboutModal';
import ProjectsModal from './components/ProjectsModal';
import SkillsModal from './components/SkillsModal';
import ContactWidget from './components/ContactWidget';
import Notification from './components/Notification';

// Import all images from src/images
import folder1 from './images/folder1.png';
import folder2 from './images/folder2.png';
import folder4 from './images/folder4.png';
import portfolioName from './images/portfolioName.png';
import profileFrame from './images/profile-frame.png';
import imKavya from './images/ImKavya.png';
import boww from './images/boww.png';
import jellyfish from './images/jellyfish.png';
import uzumaki from './images/uzumaki.png';
import charac from './images/charac.png';
import hearts from './images/hearts.png';
import starOutline from './images/star-outline.png';
import starOutline1 from './images/star-outline-1.png';
import starFilled from './images/star-filled.png';
import deco1 from './images/deco1.png';
import deco2 from './images/deco2.png';

const Portfolio = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [notification, setNotification] = useState(null);

    // Show welcome notification on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setNotification('Welcome to my portfolio!');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closeNotification = () => {
        setNotification(null);
    };

    useEffect(() => {
        const handleParallax = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            document.querySelectorAll('.parallax').forEach((el, index) => {
                const speed = (index + 1) * 1;
                el.style.transform = `translate(${x / speed}px, ${y / speed}px)`;
            });
        };
        window.addEventListener('mousemove', handleParallax);
        return () => {
            window.removeEventListener('mousemove', handleParallax);
        };
    }, []);



    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setActiveModal(null);
            }
        };

        if (activeModal) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [activeModal]);

    const openModal = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="portfolio-container">
            <div className="container">

                {/* Folder navigation */}
                <div className="folder-nav">
                    <div className="folder-item">
                        <img
                            src={folder1}
                            alt="About"
                            className="folder"
                            onClick={() => openModal('about')}
                        />
                        <span className="folder-label">About</span>
                    </div>

                    <div className="folder-item">
                        <img
                            src={folder4}
                            alt="Projects"
                            className="folder"
                            onClick={() => openModal('projects')}
                        />
                        <span className="folder-label">Projects</span>
                    </div>

                    <div className="folder-item">
                        <img
                            src={folder2}
                            alt="Skills"
                            className="folder"
                            onClick={() => openModal('skills')}
                        />
                        <span className="folder-label">Skills</span>
                    </div>
                </div>
                {/* Portfolio title */}
                <img src={portfolioName} alt="Portfolio" className="portfolio-title" />

                {/* Central character frame */}
                <img src={profileFrame} alt="Character Frame" className="character-frame" />

                {/* Hello text */}
                <img src={imKavya} alt="Hello, I'm Kavya" className="hello-text" />

                {/* Decorative elements */}
                <img src={boww} alt="Ribbon Bow" className="ribbon-bow" />
                <img src={jellyfish} alt="Jellyfish" className="jellyfish" />
                <img src={uzumaki} alt="uzumaki" className="uzumaki" />
                <img src={charac} alt="Character" className="cute-character" />
                <img src={hearts} alt="Pixel Gems" className="hearts" />


                {/* Stars */}
                <img src={starOutline} alt="Star" className="star-outline " />
                <img src={starOutline1} alt="Star" className="star-outline-1 " />
                <img src={starFilled} alt="Star" className="star-filled-1 parallax" />
                <img src={starFilled} alt="Star" className="star-filled-2 parallax" />
                <img src={deco1} alt="Star" className="star-filled-3 parallax" />
                <img src={deco1} alt="Star" className="star-filled-4 parallax" />
                <img src={deco1} alt="Star" className="star-filled-5 parallax" />
                <img src={deco1} alt="Star" className="star-filled-6 parallax" />
                <img src={deco2} alt="Star" className="star-filled-7 parallax" />
                <img src={deco2} alt="Star" className="star-filled-8 parallax" />
                <img src={deco2} alt="Star" className="star-filled-9 parallax" />
            </div>

            {/* Modals */}
            {activeModal === 'about' && <AboutModal onClose={closeModal} />}
            {activeModal === 'projects' && <ProjectsModal onClose={closeModal} />}

            {activeModal === 'skills' && <SkillsModal onClose={closeModal} />}
            <ContactWidget />
            {/* Notification */}
            {notification && (
                <Notification
                    message={notification}
                    onClose={closeNotification}
                    duration={3000}
                />
            )}

        </div>


    );


};

export default Portfolio;