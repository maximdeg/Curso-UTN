import React from "react";
import "./Navbar.css";

function Navbar({ userData }) {
  const data = {
    ES: {
      btnLoginName: "Registrarse",
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
