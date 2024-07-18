import React from "react";
import { Link } from "react-router-dom";
import "./ChatHeader.css";

function ChatHeader({ thumbnail, contactName }) {
    return (
        <section className="header">
            <div>
                <Link to={"/contacts"}>
                    <button className="header-button-go-back">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                </Link>
            </div>
            <div className="header-user-picture">
                <img className="user-pic" src={thumbnail} alt="" />
            </div>
            <div className="header-section-name">
                <span className="span-name">{contactName}</span>
                <span className="span-status">Online</span>
            </div>
            {/* <button className="header-button-options">
                <i className="bi bi-three-dots-vertical"></i>
            </button> */}
        </section>
    );
}

export default ChatHeader;
