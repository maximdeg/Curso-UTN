import { productos } from "../data/productData";
export const obtenerProductoPorId = (id) => {
    return productos.find((producto) => Number(producto.id) === Number(id));
};
