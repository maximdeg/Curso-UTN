import React from "react";
import { useParams } from "react-router-dom";
import { ChatHandler } from "../../components";
import { getContactById } from "../../helpers/contacts";

function Chat() {
    const params = useParams();

    console.log(params);

    const contact = getContactById(params.contact_id);
    return (
        <div>
            <ChatHandler contact={contact}></ChatHandler>
        </div>
    );
}

export default Chat;
