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
            <div
                className="message-author"
                style={
                    message.author === "yo"
                        ? { color: "#53bdeb" }
                        : { color: "#25d366" }
                }
            >
                <span>{message.author}</span>
            </div>
            <div className="message-content">
                <span>{message.content}</span>
            </div>
            <div className="message-info">
                <span>{message.date}</span>
                <span>
                    {message.state === "visto" ? (
                        <i className="bi bi-check-all"></i>
                    ) : (
                        <i className="bi bi-check2"></i>
                    )}
                </span>
            </div>
        </div>
    );
}

export default MessageContainer;
