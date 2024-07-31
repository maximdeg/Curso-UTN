import React from 'react';
import MessageCard from '../MessageCard/MessageCard';

function MessageList({ messages }) {
    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>
                    <MessageCard message={message} />
                </div>
            ))}
        </div>
    );
}

export default MessageList;
