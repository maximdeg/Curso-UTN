import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../helpers/productos";
import { useGlobalContext } from "../../Context/GlobalContext";

function Details() {
    const parametros = useParams();
    const { handleDeleteProduct } = useGlobalContext();

    const { nombre, descripcion, precio, id, stock, codigo, categoria } =
        getProductById(parametros.producto_id);

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
            <button onClick={() => handleDeleteProduct(parametros.producto_id)}>
                Eliminar
            </button>
            <button>Comprar</button>
        </div>
    );
}

export default Details;
