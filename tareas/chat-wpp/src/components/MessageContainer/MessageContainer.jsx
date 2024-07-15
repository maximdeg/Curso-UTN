import React from "react";
import "./MessageContainer.css";

function MessageContainer({ message }) {
    return (
        <div
            className={
                message.author === "yo"
                    ? "message-container right"
                    : "message-container left"
            }
        >
            <div className="message-author">
                <span>{message.author}</span>
            </div>
            <div className="message-content">
                <span>{message.content}</span>
            </div>
            <div className="message-info">
                <span>{message.time}</span>
                <span>
                    {message.state === "seen" ? (
                        <i className="bi bi-check-all"></i>
                    ) : message.state === "delivered" ? (
                        <i className="bi bi-check2"></i>
                    ) : (
                        <i className="bi bi-clock"></i>
                    )}
                </span>
            </div>
        </div>
    );
}

export default MessageContainer;
