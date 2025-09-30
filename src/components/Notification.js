import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ message, duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 500); // Wait for animation to complete
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`notification ${isVisible ? 'show' : 'hide'}`}>
            <img
                src="https://i.pinimg.com/originals/8e/08/b9/8e08b9961b83aa4228c6ede7f4607287.gif"
                alt="Notification Icon"
                className="notification-icon"
            />
            <div className="notification-content">
                <strong>Hello!</strong>
                <p>Welcome to my portfolio</p>
            </div>
        </div>
    );
};

export default Notification;