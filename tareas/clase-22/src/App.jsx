import React from "react";
import ColorCardList from "./components/ColorCardList/ColorCardList";

function App() {
  const colorCards = [
    {
      colors: ["#01204e", "#028391", "#f6dcac", "#feae6f"],
      likes: 28,
      date: "23 hours",
    },
    {
      colors: ["#240750", "#344C64", "#577B8D", "#57A6A1"],
      likes: 23443,
      date: "25 hours",
    },
    {
      colors: ["#C40C0C", "#FF6500", "#FF8A08", "#FFC100"],
      likes: 6574,
      date: "20 hours",
    },
    {
      colors: ["#A34343", "#E9C874", "#FBF8DD", "#C0D6E8"],
      likes: 9999,
      date: "15 hours",
    },
  ];

  return <ColorCardList colorCards={colorCards} />;
}

export default App;
