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
            time={colorCard.time}
          />
        );
      })}
    </section>
  );
};

export default ColorCardList;
