import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import "./ContactList.css";

function ContactList() {
    const { getContacts } = useGlobalContext();
    const contacts = getContacts();

    return (
        <div className="contact-list-container">
            {contacts.map((contact, index) => {
                return (
                    <Link to={"/chat/" + contact.id}>
                        <ContactCard
                            contact={contact}
                            key={index}
                        ></ContactCard>
                    </Link>
                );
            })}
        </div>
    );
}

export default ContactList;
