import React, {useState} from "react";
import ColorCardList from "./components/ColorCardList/ColorCardList";
import Counter from "./components/Counter/Counter";
import ColorForm from "./components/ColorForm/ColorForm";
import { colorCards } from "../data";

/*
  Reglas de oro:
    Un estado es inmutable. No se puede reasignar el valor de un estado.
*/

function App() {
    const [colorCardList, setColorCardList] = useState(colorCards);
    const handleSubmit = (e, formValues) => {
        e.preventDefault();
        console.log("Sent", formValues);
        const colors = [];
        for (let i = 1; i < 4; i++) {
            colors.push(formValues["color_" + i]);
        }
        setColorCardList([
            ...colorCardList,
            { formValues, colors, likes: 0, id: 5, time: formValues.time },
        ]);
    };

    return (
        <>
            <ColorCardList colorCards={colorCardList} />

            <Counter limit={3} />
            <ColorForm handleSubmit={handleSubmit} />
        </>
    );
}

export default App;
