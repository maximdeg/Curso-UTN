import React from "react";
import { RowArticle } from "./components/RowArticle";

function App() {
  return (
    <>
      <section>
        <RowArticle
          titulo={"Lift-off: The MDN Curriculum launch"}
          fecha={"4 months ago"}
          direccion_author={"https://developer.mozilla.org"}
        ></RowArticle>
        <RowArticle
          titulo={"Baseline's evolution on MDN"}
          fecha={"7 months ago"}
          direccion_author={"https://developer.mozilla.org"}
        ></RowArticle>
        <RowArticle
          titulo={"Introducing the MDN Playground: Bring your code to life!"}
          fecha={"a year ago"}
          direccion_author={"https://developer.mozilla.org"}
        ></RowArticle>
      </section>
    </>
  );
}

export default App;
