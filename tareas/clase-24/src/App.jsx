import React, { useState } from "react";
import ColorCardList from "./components/ColorCardList/ColorCardList";
import ColorCardForm from "./components/ColorCardForm/ColorCardForm";
import { colorCards } from "../data";

function App() {
    const [colorCardList, setColorCardList] = useState(colorCards);

    const handleSubmit = (e, formValues) => {
        e.preventDefault();
        console.log("Sent", formValues);
        const colors = [];
        for (let i = 1; i <= 4; i++) {
            colors.push(formValues["color_" + i]);
        }
        setColorCardList([
            ...colorCardList,
            { formValues, colors, likes: 0, id: 5, time: formValues.time },
        ]);
    };

    return (
        <>
            <ColorCardForm handleSubmit={handleSubmit} />
            <ColorCardList colorCards={colorCardList} />
        </>
    );
}

export default App;
