import React from 'react';
import './SkillsModal.css';

const SkillsModal = ({ onClose }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const skills = {
        "Programming Languages": [
            { name: "Java", level: 90 },
            { name: "Python", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "C#", level: 75 },
            { name: "SQL", level: 80 }
        ],
        "Frameworks & Technologies": [
            { name: "React", level: 75 },
            { name: "Node.js", level: 70 },
            { name: "Unity", level: 85 },
            { name: "Android Studio", level: 80 },
            { name: "Docker", level: 70 }
        ],
        "Machine Learning & AI": [
            { name: "PyTorch", level: 80 },
            { name: "TensorFlow", level: 75 },
            { name: "YOLOv5", level: 70 },
            { name: "BERT", level: 75 },
            { name: "Scikit-learn", level: 80 }
        ],
        "Tools & Platforms": [
            { name: "Git", level: 85 },
            { name: "AWS", level: 70 },
            { name: "MongoDB", level: 75 },
            { name: "MySQL", level: 80 },
            { name: "MQTT", level: 75 }
        ]
    };

    return (
        <div className="modal skills-modal" onClick={handleBackdropClick}>
            <div className="skills-computer-wrapper">
                <table className="skills-computer" cellPadding="4" cellSpacing="0">
                    {/* Navigation Bar */}
                    <tbody>
                    <tr>
                        <td className="navigation" valign="top" height="20">
                            <div id="menu">
                                <span className="site-title">Technical Skills</span>
                                <span style={{float: 'right'}}>
                                    <span className="close-btn" onClick={onClose}>&times;</span>
                                </span>
                            </div>
                        </td>
                    </tr>

                    {/* Site Name Row */}
                    <tr>
                        <td className="sitename" width="100%" valign="top">
                            Skills Dashboard
                        </td>
                    </tr>

                    {/* Top Three Boxes */}
                    <tr>
                        <td colSpan="3">
                            <table width="100%" cellPadding="0" cellSpacing="0">
                                <tbody>
                                <tr>
                                    <td className="topboxes" width="23%" valign="top">
                                        <div className="topscrollbox">
                                            <div className="title">Programming</div>
                                            {skills["Programming Languages"].map(skill => (
                                                <div key={skill.name} className="skill-item-compact">
                                                    <b>{skill.name}</b>: {skill.level}%
                                                </div>
                                            ))}
                                        </div>
                                    </td>

                                    <td className="topboxes" width="23%" valign="top">
                                        <div className="topscrollbox">
                                            <div className="title">Frameworks</div>
                                            {skills["Frameworks & Technologies"].map(skill => (
                                                <div key={skill.name} className="skill-item-compact">
                                                    <b>{skill.name}</b>: {skill.level}%
                                                </div>
                                            ))}
                                        </div>
                                    </td>

                                    <td className="topboxes" width="23%" valign="top">
                                        <div className="topscrollbox">
                                            <div className="title">ML & AI</div>
                                            {skills["Machine Learning & AI"].map(skill => (
                                                <div key={skill.name} className="skill-item-compact">
                                                    <b>{skill.name}</b>: {skill.level}%
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    {/* Main Content Area */}
                    <tr>
                        <td className="content-area" width="70%" valign="top">
                            <div className="scrollbox">
                                <div className="title">Tools & Platforms</div>
                                {skills["Tools & Platforms"].map(skill => (
                                    <div key={skill.name} className="skill-detail">
                                        <div className="skill-name">{skill.name}</div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{width: `${skill.level}%`}}
                                            ></div>
                                        </div>
                                        <div className="skill-percentage">{skill.level}%</div>
                                    </div>
                                ))}
                            </div>
                        </td>


                    </tr>

                    {/* Bottom Bar */}
                    <tr>
                        <td className="bottom" valign="top" colSpan="3">
                            <br/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SkillsModal;