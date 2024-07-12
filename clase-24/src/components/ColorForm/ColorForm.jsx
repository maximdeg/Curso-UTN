import React, { useState } from "react";

function ColorForm({ handleSubmit }) {
    const formSchema = {
        colors: 4,
        timestamp: new Date().toLocaleTimeString(),
    };

    const ColorInputs = [];
    const initialState = {
        time: "",
        color_1: "",
        color_2: "",
        color_3: "",
        color_4: "",
    };

    const [formValues, setFormValues] = useState(initialState);

    const handleChangeFormValue = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    for (let i = 1; i <= formSchema.colors; i++) {
        ColorInputs.push(
            <div key={i}>
                <label htmlFor={"color_" + i}>Color {i}</label>
                <input
                    type="text"
                    name={"color_" + i}
                    id={"color_" + i}
                    value={formValues["color_" + i]}
                    onChange={handleChangeFormValue}
                />
            </div>
        );
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, { ...formValues })}>
            <h2>Crea tu propia color Card</h2>
            {ColorInputs}
            <label htmlFor="time"> Fecha </label>
            <input
                type={formSchema.time}
                name="time"
                id="time"
                onChange={handleChangeFormValue}
                value={formValues.time}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ColorForm;
