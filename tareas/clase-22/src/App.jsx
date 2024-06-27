import React from "react";
import ColorCardList from "./components/ColorCardList/ColorCardList";

function App() {
  const colors = [
    {
      color: ["#01204e", "#028391", "#f6dcac", "#feae6f"],
      likes: 28,
      fecha: "23 hours",
    },
    {
      color: ["#240750", "#344C64", "#577B8D", "#57A6A1"],
      likes: 23443,
      fecha: "25 hours",
    },
    {
      color: ["#C40C0C", "#FF6500", "#FF8A08", "#FFC100"],
      likes: 6574,
      fecha: "20 hours",
    },
    {
      color: ["#A34343", "#E9C874", "#FBF8DD", "#C0D6E8"],
      likes: 9999,
      fecha: "15 hours",
    },
  ];

  return <ColorCardList colors={colors} />;
}

export default App;

