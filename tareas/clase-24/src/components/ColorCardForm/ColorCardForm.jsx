import React, { useState } from "react";
import "./ColorCardForm.css";

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
            <div className="line color-inputs-container" key={i}>
                <label className="labels" htmlFor={"color_" + i}>
                    Color {i}
                </label>
                <input
                    className="inputs"
                    type="color"
                    name={"color_" + i}
                    id={"color_" + i}
                    value={formValues["color_" + i]}
                    onChange={handleChangeFormValue}
                />
            </div>
        );
    }

    return (
        <section className="section-create-card">
            <form
                className="color-form"
                onSubmit={(e) => handleSubmit(e, { ...formValues })}
            >
                <h2 className="title">Crea tu propia color Card</h2>
                {ColorInputs}
                <div className="line time-container">
                    <label className="labels" htmlFor="time">
                        {" "}
                        Fecha{" "}
                    </label>
                    <input
                        className="inputs"
                        type={formSchema.time}
                        name="time"
                        id="time"
                        onChange={handleChangeFormValue}
                        value={formValues.time}
                    />
                </div>
                <div className="btn-container">
                    <button className="btn-submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>

            <div className="preview-container">
                <div className="color-card">
                    <div className="colors">
                        <div
                            style={{ backgroundColor: formValues.color_1 }}
                            className="color"
                        >
                            <span>{formValues.color_1}</span>
                        </div>
                        <div
                            style={{ backgroundColor: formValues.color_2 }}
                            className="color"
                        >
                            <span>{formValues.color_2}</span>
                        </div>
                        <div
                            style={{ backgroundColor: formValues.color_3 }}
                            className="color"
                        >
                            <span>{formValues.color_3}</span>
                        </div>
                        <div
                            style={{ backgroundColor: formValues.color_4 }}
                            className="color"
                        >
                            <span>{formValues.color_4}</span>
                        </div>
                    </div>

                    <div className="color-card-controls">
                        <span className="update"> {formValues.time} </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ColorForm;
