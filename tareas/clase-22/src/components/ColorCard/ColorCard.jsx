import React from "react";
import { useState } from "react";
import "./ColorCard.css";

const ColorCard = props => {
  let [count, setCount] = useState(0);
  const colorCard = props;

  return (
    <>
      <div className="color-card">
        <div className="colors">
          {colorCard.colors.map(color => {
            return (
              <div style={{ backgroundColor: color }} className="color">
                <span>{color}</span>
              </div>
            );
          })}
        </div>

        <div className="color-card-controls">
          <button
            className="btn-like"
            onClick={() => setCount(count => count + 1)}
          >
            <i className="bi bi-heart"></i>
            {colorCard.likes + count}
          </button>
          <span className="update"> {colorCard.fecha} </span>
        </div>
      </div>
    </>
  );
};

export default ColorCard;
