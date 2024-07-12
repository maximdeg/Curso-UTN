import React from "react";
import { useState } from "react";
import "./ColorCard.css";

const ColorCard = ({ colors, likes, date }) => {
  let [count, setCount] = useState(0);

  return (
    <>
      <div className="color-card">
        <div className="colors">
          {colors.map(color => {
            return (
              <div style={{ backgroundColor: color }} className="color">
                <span>{color}</span>
              </div>
            );
          })}
        </div>

        <div className="color-card-controls">
          <button className="btn-like" onClick={() => setCount(count + 1)}>
            <i className="bi bi-heart"></i>
            {likes + count}
          </button>
          <span className="update"> {date} </span>
        </div>
      </div>
    </>
  );
};

export default ColorCard;
