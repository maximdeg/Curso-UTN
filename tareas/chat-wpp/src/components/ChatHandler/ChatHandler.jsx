import React, { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatSection from "../ChatSection/ChatSection";
import TextInput from "../TextInput/TextInput";
import { useGlobalContext } from "../../Context/GlobalContext";
import "./ChatHandler.css";

function ChatHandler({ contact }) {
    const messageList = contact.messages;
    const [newMessageList, setNewMessageList] = useState(messageList);
    const { saveMessage } = useGlobalContext();

    const handleSubmit = (e, formValues) => {
        e.preventDefault();
        setNewMessageList([...newMessageList, formValues]);
        console.log("Sent", formValues);
        saveMessage(contact.id, formValues);
    };

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
