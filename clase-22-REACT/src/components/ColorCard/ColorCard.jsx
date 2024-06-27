import React from "react";
import "./ColorCard.css";

const ColorCard = props => {
  return (
    <>
      <div className="color-card">
        <div className="colors">
          {props.colors.map(color => {
            return (
              <div style={{ backgroundColor: color }} className="color">
                <span>{color}</span>
              </div>
            );
          })}
        </div>

        <div className="color-card-controls">
          <button className="btn-like">
            <i className="bi bi-heart"></i>
            {props.likes}
          </button>
          <span className="update"> {props.fecha} </span>
        </div>
      </div>
    </>
  );
};

export default ColorCard;
