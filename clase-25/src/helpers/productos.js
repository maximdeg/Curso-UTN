import { productos } from "../data/productData";

/**
 * Finds and returns a product by its ID.
 *
 * @param {number} id - The ID of the product to find.
 * @return {Object|undefined} The product with the matching ID or undefined if not found.
 */
export const obtenerProductoPorId = (id) => {
    return productos.find((producto) => Number(producto.id) === Number(id));
};

/**
 * Retrieves products from localStorage, parses them, and returns them. If no products are found in localStorage, it stringifies the 'productos' array, saves it to localStorage, and returns 'productos'.
 *
 * @return {Array} The products retrieved from localStorage or the 'productos' array.
 */
export const getProducts = () => {
    const saved_products = localStorage.getItem("products");
    if (saved_products) {
        return JSON.parse(saved_products);
    } else {
        const productsJSON = JSON.stringify(productos);
        localStorage.setItem("products", productsJSON);
        return productos;
    }
};
export const saveProductsToLocalStorage = (products) => {
    const productsJSON = JSON.stringify(products);
    localStorage.setItem("products", productsJSON);
};

export const createProduct = (newProduct) => {
    const products = getProducts();
    products.push(newProduct);
    saveProductsToLocalStorage(products);
};


export const getProductById = (id) => {
    const productsList = getProducts();
    if (productsList) {
        return productsList.find(
            (product) => Number(product.id) === Number(id)
        );
    } else {
        return null;
    }
};


export const deleteProductById = (id) => {
    const productsList = getProducts();
    const newProductsList = productsList.filter((product) => {
        return Number(product.id) !== Number(id);
    });
    saveProductsToLocalStorage(newProductsList);

    console.log("Product deleted", newProductsList);
};
