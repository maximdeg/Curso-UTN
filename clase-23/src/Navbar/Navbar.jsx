import React from "react";
import "./Navbar.css";

function Navbar(props) {
  const userData = props.userData;
  const data = {
    ES: {
      btnLoginName: "Logearse",
      btnProductName: "Crear Producto",
    },
    EN: {
      btnLoginName: "Login",
      btnProductName: "Create Product",
    },
  };
  const dataSelected = data[userData.lang];
  return (
    <nav className="navbar">
      <div>
        <h1>Navbar</h1>
      </div>
      <div className="menu">
        <span>{userData.lang}</span>
        {!userData.isLogged && <button>{dataSelected.btnLoginName}</button>}
        {userData.isAdmin && <button>{dataSelected.btnProductName}</button>}
      </div>
    </nav>
  );
}

export default Navbar;
