import React, { useState, useRef, useEffect } from "react";
import "./TextInput.css";

const TextInput = ({ handleSubmit, lastId }) => {
    const initialState = {
        author: "yo",
        content: "",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        state: "no-entregado",
        id: lastId + 1,
    };

    const [msgValues, setMsgValues] = useState(initialState);

    const handleContentChange = (e) => {
        const { name, value } = e.target;
        setMsgValues({ ...msgValues, [name]: value });
    };

    const handleClearInput = () => {
        setTimeout(() => {
            setMsgValues(initialState);
        }, 100);
    };

    return (
        <section className="typing-section">
            <div className="input-container">
                <button className="btn-emoji">
                    <i className="bi bi-emoji-smile"></i>
                </button>
                <button className="btn-plus">
                    <i className="bi bi-plus"></i>
                </button>
                <form
                    className="text-form"
                    onSubmit={(e) => handleSubmit(e, { ...msgValues })}
                >
                    <input
                        className="text-input"
                        type={msgValues.content}
                        id="content"
                        name="content"
                        onChange={handleContentChange}
                        value={msgValues.content}
                        placeholder="Mensaje"
                        required
                    />

                    <button
                        className="btn-send"
                        type="submit"
                        onClick={handleClearInput}
                    >
                        <i className="bi bi-send-arrow-up-fill"></i>
                    </button>
                </form>
                <button className="btn-mic">
                    <i className="bi bi-mic-fill"></i>
                </button>
            </div>
        </section>
    );
};

export default TextInput;
