import React from "react";
import { ProductList } from "../../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

function Home() {
    // const productList = getProducts();
    // console.log(productList);

    const { getProducts } = useGlobalContext();
    const productos = getProducts();

    console.log("HOME/PRODUCTOS", productos);

    return (
        <div>
            <Link to={"/product/new"}>
                <h1>Crear nuevo producto</h1>
            </Link>
            <Link to={"/login"}>
                <h2>Carrito</h2>
            </Link>
            <h1>Elige nuestros productos</h1>
            <ProductList productos={productos}></ProductList>
        </div>
    );
}

export default Home;
