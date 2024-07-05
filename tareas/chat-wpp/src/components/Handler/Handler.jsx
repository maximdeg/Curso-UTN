import React from "react";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import TextInput from "../TextInput/TextInput";

import "./Handler.css";
function Handler() {
  const messageList = [
    {
      author: "pepe",
      content: "hey!",
      date: "ayer a las 15:34",
      state: "visto",
      id: 1,
    },
    {
      author: "pepe",
      content: "Hola?",
      date: "ayer a las 15:34",
      state: "visto",
      id: 2,
    },
    {
      author: "yo",
      content: "Sos real OMG",
      date: "ayer a las 15:35",
      state: "visto",
      id: 3,
    },
    {
      author: "pepe",
      content: "Obviamente, acaso lo dudaste?",
      date: "ayer a las 15:36",
      state: "visto",
      id: 4,
    },
    {
      author: "yo",
      content: "Jamas.",
      date: "ayer a las 15:37",
      state: "entregado",
      id: 5,
    },
  ];

  return (
    <section className="chat-section">
      <Header />
      <Messages messageList={messageList} />
      <TextInput />
    </section>
  );
}

export default Handler;
