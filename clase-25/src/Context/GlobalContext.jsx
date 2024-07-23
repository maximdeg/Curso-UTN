import { createContext, useContext, useState } from "react";
import {
    deleteProductById,
    getProducts,
    createProduct,
} from "../helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [productos, setProductos] = useState(getProducts());
    const navigation = useNavigate();

    const handleDeleteProduct = (id) => {
        setProductos(deleteProductById(id));
        navigation("/home");
    };

    const handleAddProduct = (newProduct) => {
        setProductos(createProduct(newProduct));
        navigation("/home");
    };

    const handleGetNewId = () => {
        const productList = getProducts();
        return Math.max(0, ...productList.map((product) => product.id)) + 1;
    };

    return (
        <GlobalContext.Provider
            value={{
                productos,
                getProducts,
                handleDeleteProduct,
                handleAddProduct,
                handleGetNewId,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    //  Esto devuelve el objeto value del GlobalContextProvider
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
