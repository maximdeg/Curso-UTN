import React from "react";
import { useParams } from "react-router-dom";
import { ChatHandler } from "../../components";
import { useGlobalContext } from "../../Context/GlobalContext";

function Chat() {
    const params = useParams();
    const { getContactById } = useGlobalContext();
    const contact = getContactById(params.contact_id);

    return (
        <div>
            <ChatHandler contact={contact}></ChatHandler>
        </div>
    );
}

export default Chat;
