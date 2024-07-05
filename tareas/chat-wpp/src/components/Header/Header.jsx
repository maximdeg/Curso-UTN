import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <div>
        <button className="header-button-go-back">
          <i className="bi bi-arrow-left"></i>{" "}
        </button>
      </div>
      <div className="header-user-picture">
        <img classNmae="image" src="./images/pic.jpg" alt="" />
      </div>
      <div className="header-section-name">
        <span className="span-name">Nombre</span>
        <span className="span-description">Online</span>
      </div>
      <button className="header-button-options">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </section>
  );
}

export default Header;
