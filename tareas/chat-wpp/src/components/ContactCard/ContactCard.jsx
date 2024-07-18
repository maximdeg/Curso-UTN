import React from "react";
import "./ContactCard.css";

function ContactCard({ contact }) {
    const { name, thumbnail } = contact;

    return (
        <div className="contact-card-container">
            <div className="contact-card-picture">
                <img src={thumbnail} alt="" />
            </div>
            <div className="contact-card-name">
                <span>{name}</span>
            </div>
            <hr />
        </div>
    );
}

export default ContactCard;
