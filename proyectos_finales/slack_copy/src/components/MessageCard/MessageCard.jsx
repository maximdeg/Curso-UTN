import React from 'react';

function MessageCard({ message }) {
    return (
        <div>
            <img src={message.image} style={{ width: '40px', height: '40px' }}></img>
            <span>
                {message.username}: {message.message}
            </span>
            <span>{message.date}</span>
        </div>
    );
}

export default MessageCard;
