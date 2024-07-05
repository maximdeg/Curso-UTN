import React from "react";
import "./MessageContainer.css";

function MessageContainer({ message }) {
  return (
    <div
      className="message-container"
      style={
        message.author === "yo"
          ? { alignSelf: "flex-end", backgroundColor: "#d9fdd3" }
          : { alignSelf: "flex-start", backgroundColor: "white" }
      }
    >
      <div
        className="message-author"
        style={
          message.author === "yo" ? { color: "#128c7e" } : { color: "#25d366" }
        }
      >
        <span>{message.author}</span>
      </div>
      <div className="message-content">
        <span>{message.content}</span>
      </div>
      <div className="message-info">
        <span>{message.date}</span>
        <span>{message.state}</span>
      </div>
    </div>
  );
}

export default MessageContainer;
