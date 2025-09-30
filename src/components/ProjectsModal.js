import React, { useState, useEffect } from 'react';
import './ProjectsModal.css';


import agaram1 from '../images/agaram1.png';
import agaram2 from '../images/agaram2.png';
import agaram4 from '../images/agaram4.png';
import ben1 from '../images/ben1.jpg';
import ben2 from '../images/ben2.jpg';
import bn3 from '../images/bn3.jpg';
import ben4 from '../images/ben4.jpg';
import ben5 from '../images/ben5.jpg';
import ben6 from '../images/ben6.jpg';
// Note: If file is named "clo1 (1).png" with space, you need to rename it to clo1.png
// OR import it like: import clo1 from '../images/clo1 (1).png';
import clo1 from '../images/clo1 (1).png';
import clo2 from '../images/clo2.png';
import clo3 from '../images/clo3.png';
import clo4 from '../images/clo4.png';

const ProjectsModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('tab1-wrapper');

    useEffect(() => {
        // Set default tab when modal opens
        setActiveTab('tab1-wrapper');
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="modal projects-modal" onClick={handleBackdropClick}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                {/* NOTEBOOK wrapper */}
                <div id="wrapper-index">
                    <div className="tab">
                        <button
                            className={`tablinks tab4-b ${activeTab === 'tab4-wrapper' ? 'active' : ''}`}
                            onClick={() => openTab('tab4-wrapper')}
                        >
                            More
                        </button>
                        <button
                            className={`tablinks tab3-b ${activeTab === 'tab3-wrapper' ? 'active' : ''}`}
                            onClick={() => openTab('tab3-wrapper')}
                        >
                            Ticketer
                        </button>
                        <button
                            className={`tablinks tab2-b ${activeTab === 'tab2-wrapper' ? 'active' : ''}`}
                            onClick={() => openTab('tab2-wrapper')}
                        >
                            Benkyozer
                        </button>
                        <button
                            className={`tablinks tab1-b ${activeTab === 'tab1-wrapper' ? 'active' : ''}`}
                            onClick={() => openTab('tab1-wrapper')}
                        >
                            Agaram
                        </button>
                    </div>

                    {/* TAB 1 wrapper - Agaram */}
                    <div id="tab1-wrapper" className={`tabcontent ${activeTab === 'tab1-wrapper' ? 'active' : ''}`}>
                        <div id="tab1" className="paper left">
                            <div className="left-in">
                                <h3>AGARAM</h3>
                                <p><strong>Tamil Language Learning Game</strong><br />
                                    Developed an innovative Unity-based game that teaches
                                    conversational Tamil through immersive
                                    storytelling and interactive gameplay.
                                    The project combines authentic cultural
                                    scenarios, native voiceovers,
                                    and dynamic quests to enhance practical language
                                    skills, promote heritage preservation,
                                    and deliver cross-cultural learning in an engaging format.
                                </p>
                            </div>
                        </div>
                        <div id="tab1-p" className="paper right">
                            <p><img src={agaram1} width="375" alt="Agaram Screenshot 1" /></p>
                            <p><img src={agaram2} width="375" alt="Agaram Screenshot 2" /></p>
                            <p><img src={agaram4} width="375" alt="Agaram Screenshot 3" /></p>
                        </div>
                    </div>

                    {/* TAB 2 wrapper - Benkyozer */}
                    <div id="tab2-wrapper" className={`tabcontent ${activeTab === 'tab2-wrapper' ? 'active' : ''}`}>
                        <div id="tab2" className="paper left">
                            <div className="left-in">
                                <h3>Benkyozer</h3>
                                <p><strong>Productivity app</strong><br />
                                    Developed Benkyozer, an Android productivity app using Android Studio,
                                    tailored for students and professionals seeking improved focus and organization.
                                    Key features include a study timer, task management, anxiety relief exercises,
                                    note uploading, custom themes, and personalized audio settings.
                                    The app tracks study progress and promotes well-being,
                                    delivering a comprehensive solution to enhance productivity,
                                    reduce stress, and help users achieve their academic or personal goals.
                                </p>
                            </div>
                        </div>
                        <div id="tab2-p" className="paper right">
                            <div className="image-grid">
                                <img src={ben6} width="100" alt="Benkyozer Screen 1" />
                                <img src={ben1} width="100" alt="Benkyozer Screen 2" />
                                <img src={ben2} width="100" alt="Benkyozer Screen 3" />
                                <img src={bn3} width="100" alt="Benkyozer Screen 4" />
                                <img src={ben4} width="100" alt="Benkyozer Screen 5" />
                                <img src={ben5} width="100" alt="Benkyozer Screen 6" />
                            </div>
                        </div>
                    </div>

                    {/* TAB 3 wrapper - Ticketer */}
                    <div id="tab3-wrapper" className={`tabcontent ${activeTab === 'tab3-wrapper' ? 'active' : ''}`}>
                        <div id="tab3" className="paper left">
                            <div className="left-in">
                                <h3>Ticketer</h3>
                                <p><strong>Ticketing system</strong><br />
                                    Developed Ticketer, a cross-platform online ticket booking application
                                    using Java and Electron JS. The app seamlessly integrates RESTful web services
                                    for robust client-server communication, enabling real-time ticket booking and
                                    management across devices. Its intuitive interface provides users with a smooth,
                                    secure experience, supporting features such as availability checking, reservation,
                                    and confirmation—ideal for modern, scalable ticketing solutions.
                                </p>
                            </div>
                        </div>
                        <div id="tab3-p" className="paper right">
                            <img src={clo1} width="400" alt="Ticketer Screen 1" />
                            <img src={clo2} width="400" alt="Ticketer Screen 2" />
                            <img src={clo3} width="400" alt="Ticketer Screen 3" />
                            <img src={clo4} width="400" alt="Ticketer Screen 4" />
                        </div>
                    </div>

                    {/* TAB 4 wrapper - More Projects */}
                    <div id="tab4-wrapper" className={`tabcontent ${activeTab === 'tab4-wrapper' ? 'active' : ''}`}>
                        <div id="tab4" className="paper left">
                            <div className="left-in">
                                <h3>Cloud-based File Sharing System</h3>
                                <p>Engineered and deployed a cloud-based file-sharing system utilizing Java,
                                    Docker Compose, MQTT, and LAMP technologies. Implemented a scalable
                                    architecture with a Java-based load balancer to efficiently manage
                                    increasing traffic and ensure high availability. The platform supports
                                    secure file uploads, downloads, and sharing, leverages containerization for
                                    streamlined deployment, and delivers reliable performance to meet the needs
                                    of users and organizations seeking robust file exchange solutions.</p>
                                <br />
                                <p><h3>Publications:</h3> <br />
                                    <a href="https://www.igi-global.com/chapter/creating-a-sustainable-large-scale-content-based-biomedical-article-classifier-using-bert/349534" target="_blank" rel="noopener noreferrer">Creating a Sustainable Large-Scale Content-Based Biomedical Article Classifier Using BERT</a></p>
                            </div>
                        </div>
                        <div id="tab4-p" className="paper right">
                            <h3>Python projects</h3>
                            <br />
                            <p><strong>1. Wheat Disease Classification </strong><br />
                                Designed and implemented a wheat disease classification
                                system for precision agriculture using Python, PyTorch,
                                and YOLOv5. Leveraged Position Attention Blocks alongside
                                single-shot learning to boost detection accuracy in object
                                classification tasks. The model provides rapid, reliable
                                identification of wheat diseases from field images, enabling
                                early intervention and improved crop management for farmers and agronomists.</p>
                            <br />
                            <p><strong>2. Academic Performance Using AI on Student Mental Health Data</strong><br />
                                Developed an AI project to predict academic performance
                                using student mental health and lifestyle data. Explored machine
                                learning approaches—Multilayer Perceptron, Random Forest, CNN, and K-Means
                                clustering—on processed datasets to classify GPA levels. Integrated SMOTE
                                and PCA for improved results, evaluated models using accuracy and confusion
                                matrices, and addressed ethical risks. The project demonstrates the value of
                                holistic analytics for early student support in educational environments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsModal;