import React from "react";
import ColorCard from "../ColorCard/ColorCard";
import "./ColorCardList.css";

const ColorCardList = ({ colorCards }) => {
  return (
    <section className="colors-section">
      {colorCards.map(colorCard => {
        return (
          <ColorCard
            colors={colorCard.colors}
            likes={colorCard.likes}
            date={colorCard.date}
          />
        );
      })}
    </section>
  );
};

export default ColorCardList;
