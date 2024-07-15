import React, { useRef, useEffect } from "react";
import MessageContainer from "../MessageContainer/MessageContainer";
import "./ChatSection.css";

const ChatSection = ({ messageList }) => {
    const messagesEndRef = useRef(messageList);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop =
                messagesEndRef.current.scrollHeight;
        }
    }, [messageList]);

    return (
        <section className="message-section" ref={messagesEndRef}>
            <div className="chat-container">
                {messageList.map((message, index) => {
                    return <MessageContainer message={message} key={index} />;
                })}
            </div>
            <div ref={messagesEndRef}></div>
        </section>
    );
};

export default ChatSection;
