import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./Context/GlobalContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </BrowserRouter>
);
