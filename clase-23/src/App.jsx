import React from "react";

import Navbar from "./Navbar/Navbar";

function App() {
  let condition = true;
  let isRegistered = true;

  const userData = {
    isLogged: false,
    isAdmin: true,
    lang: "EN",
  };
  return (
    <>
      <Navbar userData={userData} />
      <hr />
      {condition ? <h1>Hola</h1> : <h1>Adios</h1>}
      {condition && <h1>Se cumplio la condicion</h1>}
      {(isRegistered && <h1>Ya estas registrado</h1>) || (
        <h1>No estas registrado</h1>
      )}
    </>
  );
}

export default App;
