import React from 'react';
import './Header.css';

function Header() {
    return (
        <section className="header">
            <div>
                <button className="header-button-go-back">
                    <i className="bi bi-arrow-left"></i>
                </button>
            </div>
            <div className="header-user-picture">
                <img className="user-pic" src="./images/pic.jpg" alt="" />
            </div>
            <div className="header-section-name">
                <span className="span-name">Pepe</span>
                <span className="span-status">Online</span>
            </div>
            <div className="header-section-options">
                <button className="header-button-options">
                    <i className="bi bi-three-dots-vertical"></i>
                </button>
            </div>
        </section>
    );
}

export default Header;
