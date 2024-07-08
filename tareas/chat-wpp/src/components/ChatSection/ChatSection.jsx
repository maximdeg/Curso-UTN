import React from 'react';
import MessageContainer from '../MessageContainer/MessageContainer';
import './ChatSection.css';

const ChatSection = ({ messageList }) => {
    return (
        <section className="message-section">
            <div className="chat-container">
                {messageList.map((message, index) => {
                    return <MessageContainer message={message} />;
                })}
            </div>
        </section>
    );
};

export default ChatSection;
