import React, { useEffect, useState } from 'react';
import './main.css'; // Add your custom styles

const Notification = ({ message, type }) => {
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

    const [notifications, setNotifications] = useState(0)
    useEffect(() => {
        setNotifications(1)
    }, [message])

    const onClose = () => { setNotifications(0) }

    setTimeout(() => {
        setNotifications(0)
    }, 10000); // 10 seconds
    return (<div>
        {notifications === 1 && <div style={{
            ...notificationStyles[type],
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
        }}
            >
            <span>{message}</span>
            <button onClick={onClose} style={{ marginLeft: '10px' }}>Close</button>
        </div>}</div>
    );
};

// const NotificationContainer = () => {
//     const [notifications, setNotifications] = useState([]);

//     const addNotification = (message, type) => {
//         setNotifications([...notifications, { message, type }]);
//         setTimeout(() => {
//             setNotifications((prev) => prev.filter((n) => n.message !== message));
//         }, 3000); // Auto-close after 3 seconds
//     };

//     return (
//         <div>
//             <button onClick={() => addNotification("This is a success notification!", "success")}>
//                 Show Success Notification
//             </button>
//             <button onClick={() => addNotification("This is an error notification!", "error")}>
//                 Show Error Notification
//             </button>
//             <div className="notifications">
//                 {notifications.map((notif, index) => (
//                     <Notification
//                         key={index}
//                         message={notif.message}
//                         type={notif.type}
//                         onClose={() => setNotifications((prev) => prev.filter((n) => n.message !== notif.message))}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

export default Notification;
