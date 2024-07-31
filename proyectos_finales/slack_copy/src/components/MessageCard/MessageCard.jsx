import React from 'react';

function MessageCard({ message }) {
    return (
        <div>
            <img src={message.image}></img>
            <span>
                {message.username}: {message.message}
            </span>
            <span>{message.date}</span>
        </div>
    );
}

export default MessageCard;
