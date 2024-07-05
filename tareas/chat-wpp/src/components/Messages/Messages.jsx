import React from "react";
import MessageContainer from "../MessageContainer/MessageContainer";
import "./Messages.css";

const Messages = ({ messageList }) => {
  return (
    <section className="message-section">
      {messageList.map(message => {
        return <MessageContainer message={message} />;
      })}
    </section>
  );
};

export default Messages;
