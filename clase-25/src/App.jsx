import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Detail, Home, Cart } from "./Pages";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1>Hello world!!</h1>
                        <Link to={"/home"}>Go home</Link>
                    </>
                }
            />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/detail/:producto_id" element={<Detail></Detail>} />
            <Route path="/home" element={<Home></Home>} />
        </Routes>
    );
}

export default App;
