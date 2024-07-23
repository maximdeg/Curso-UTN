import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Detail, Home, Cart, NewProduct } from "./Pages";

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
            <Route path="/home" element={<Home></Home>} />
            <Route path="/product/new" element={<NewProduct></NewProduct>} />
            <Route path="/detail/:producto_id" element={<Detail></Detail>} />
            <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
    );
}

export default App;
