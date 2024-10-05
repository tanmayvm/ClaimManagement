import React, { useEffect, useState } from 'react';
import './main.css';

const Notification = ({ message, type, onClose }) => {
    const [visible, setVisible] = useState(false);

    const notificationStyles = {
        success: {
            border: '2px solid #4caf50',
            color: '#4caf50',
        },
        error: {
            border: '2px solid #f44336',
            color: '#f44336',
        },
        default: {
            border: '2px solid #dedc52',
            color: '#dedc52',
        },
    };


    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                if (onClose) onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    const onClose1 = () => {
        setVisible(false);
        if (onClose) onClose();
    };

    return (
        <div>
            {visible && (
                <div
                    style={{
                        ...notificationStyles[type] || notificationStyles.default,
                        padding: '10px',
                        margin: '10px 0',
                        borderRadius: '5px',
                    }}
                >
                    <span>{message}</span>
                    <button onClick={onClose1} style={{ marginLeft: '10px' }}>
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Notification;
