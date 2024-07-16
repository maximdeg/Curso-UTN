import React from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../../helpers/productos";

function Details() {
    const parametros = useParams();

    console.log(parametros);

    const { nombre, descripcion, precio, id, stock, codigo, categoria } =
        obtenerProductoPorId(parametros.producto_id);

    return (
        <div>
            <h1>Details</h1>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: {precio}</p>
            <p>Cantidad: {stock}</p>
            <p>Codigo: {codigo}</p>
            <p>Categoria: {categoria}</p>
            <button>
                <Link to={"/home"}>Volver</Link>
            </button>
            <button>Comprar</button>
        </div>
    );
}

export default Details;
