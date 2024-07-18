import React, { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatSection from "../ChatSection/ChatSection";
import TextInput from "../TextInput/TextInput";
import "./ChatHandler.css";

function ChatHandler({ contact }) {
    const messageList = contact.messages;
    const [newMessageList, setNewMessageList] = useState(messageList);

    const handleSubmit = (e, formValues) => {
        e.preventDefault();
        console.log("Sent", formValues);
        setNewMessageList([...newMessageList, formValues]);
    };

    console.log(contact);

    return (
        <section className="chat-section">
            <ChatHeader
                thumbnail={contact.thumbnail}
                contactName={contact.name}
            />
            <ChatSection messageList={newMessageList} />
            <TextInput
                handleSubmit={handleSubmit}
                lastId={newMessageList.length}
            />
        </section>
    );
}

export default ChatHandler;
