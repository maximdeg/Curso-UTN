import React from "react";
import { Button } from "./components/Button";
import Carta from "./components/Carta";

import { name, person } from "./functions";

// <></> Esta es la expresion fragmento en JSX para que solo tenga un solo padre
// Habilitar ES7 para React para usar el comando rafce para autocompletar items
function App() {
  console.log(name, person);
  const obtenerNumeroRandom = Math.random();
  return (
    <>
      <div>
        <h1>Hello {person.name}!!!</h1>
        <h2>Age {2024 - 1983}</h2>
        <h3>{obtenerNumeroRandom}</h3>
        <Button texto="Click me" />
        <Carta />
      </div>
    </>
  );
}

export default App;
