import React from "react";
import { ProductList } from "../../components";
import { productos } from "./../../data/productData";

function Home() {
    return (
        <div>
            <h1>Elige nuestros productos</h1>
            <ProductList productos={productos}></ProductList>
        </div>
    );
}

export default Home;
