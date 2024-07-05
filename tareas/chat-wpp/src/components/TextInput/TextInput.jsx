import React from "react";
import "./TextInput.css";

const TextInput = () => {
  return (
    <section className="typing-section">
      <div className="input-container">
        <button className="btn-emoji">
          <i className="bi bi-emoji-smile"></i>
        </button>
        <button className="btn-plus">
          <i className="bi bi-plus"></i>
        </button>
        <textarea
          className="text-input"
          placeHolder="Aca va el texto"
          name="message"
        />

        <button className="btn-send" type="submit">
          <i className="bi bi-send-arrow-up-fill"></i>
        </button>
        <button className="btn-mic" type="submit">
          <i className="bi bi-mic-fill"></i>
        </button>
      </div>
    </section>
  );
};

export default TextInput;
