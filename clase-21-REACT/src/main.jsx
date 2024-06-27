import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import saySomething from "./functions.js";
saySomething();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
