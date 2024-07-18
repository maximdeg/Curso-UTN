import React from "react";
import { Routes, Route } from "react-router-dom";
import { Chat, Contacts } from "./Pages";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/contacts" element={<Contacts></Contacts>}></Route>
            <Route path="/chat/:contact_id" element={<Chat></Chat>} />
        </Routes>
    );
}

export default App;
