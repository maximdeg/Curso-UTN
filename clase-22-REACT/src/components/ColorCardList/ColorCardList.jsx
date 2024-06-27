import React from "react";
import ColorCard from "../ColorCard/ColorCard";
import "./ColorCardList.css";

const ColorCardList = props => {
  return (
    <section className="colors-section">
      {props.colors.map(color => {
        return (
          <ColorCard
            colors={color.color}
            likes={color.likes}
            fecha={color.fecha}
          />
        );
      })}
    </section>
  );
};

export default ColorCardList;
