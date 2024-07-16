import React, { useState } from "react";
import Header from "../Header/Header";
import ChatSection from "../ChatSection/ChatSection";
import TextInput from "../TextInput/TextInput";
import { DATA_MOOK as messageList } from "../../../data";

import "./Handler.css";
function Handler() {
    const [newMessageList, setNewMessageList] = useState(messageList);

    const handleSubmit = (e, formValues) => {
        e.preventDefault();
        console.log("Sent", formValues);
        setNewMessageList([...newMessageList, formValues]);
        
    };

    return (
        <section className="chat-section">
            <Header />
            <ChatSection messageList={newMessageList} />
            <TextInput handleSubmit={handleSubmit} lastId={newMessageList.length} />
        </section>
    );
}

export default Handler;
