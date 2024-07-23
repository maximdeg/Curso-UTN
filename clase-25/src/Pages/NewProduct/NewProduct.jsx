import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

function NewProduct() {
    const { handleAddProduct, handleGetNewId } = useGlobalContext();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [descriptionLabel, setDescriptionLabel] = useState(true);
    const [priceLabel, setPriceLabel] = useState(true);
    const [stockLabel, setStockLabel] = useState(true);
    let Message;

    const initialStateForm = {
        id:"",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        codigo: "",
        categoria: "",
        thumbnail: "",
    };

    const [formValues, setFormValues] = useState(initialStateForm);

    const isEmptyObjectValues = (obj) => {
        console.log(obj);
        for (const key in obj) {
            const value = obj[key];
            if (
                value === undefined ||
                value === null ||
                value === "" ||
                value === 0
            ) {
                Message = <span>Por favor complete el {key} del producto</span>;
                return false; // Return false if any value is considered empty
            }
        }
        Message = <span>El producto fue guardado correctamente</span>;
        return true; // Return true if all values are full
    };

    const handleSubmit = (e, formValues) => {
        e.preventDefault();
        setFormValues({ ...formValues, ["id"]: handleGetNewId() });
        handleAddProduct(formValues);
        // const isEmpty = isEmptyObjectValues(formValues);
        // if (isEmpty) {
        // } else {
        //     return;
        // }
    };

    const handleChangeFormValue = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleChangeDescription = (e) => {
        const { value } = e.target;
        if (value.length < 10) {
            setBtnDisabled(false);
            setDescriptionLabel(false);
        } else {
            setBtnDisabled(true);
            setDescriptionLabel(true);
        }
        setFormValues({ ...formValues, ["descripcion"]: value });
    };
    const handleChangeStock = (e) => {
        const { value } = e.target;
        if (value < 1) {
            setStockLabel(false);
            setBtnDisabled(false);
        } else {
            setStockLabel(true);
            setBtnDisabled(true);
        }
        setFormValues({ ...formValues, ["stock"]: value });
    };
    const handleChangePrice = (e) => {
        const { value } = e.target;
        if (value < 1) {
            setPriceLabel(false);
            setBtnDisabled(false);
        } else {
            setPriceLabel(true);
            setBtnDisabled(true);
        }
        setFormValues({ ...formValues, ["precio"]: value });
    };
    return (
        <form onSubmit={(e) => handleSubmit(e, { ...formValues })}>
            <h1>Crear nuevo producto</h1>
            <div>
                {" "}
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    onChange={handleChangeFormValue}
                    value={formValues.nombre}
                />
            </div>
            <div>
                <label>Descripción</label>
                <input
                    type="text"
                    name="descripcion"
                    onChange={handleChangeDescription}
                    value={formValues.descripcion}
                ></input>
                {!descriptionLabel && (
                    <span style={{ color: "red" }}>
                        La descripcion debe tener un minimo de 10 caracteres
                    </span>
                )}
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    name="precio"
                    onChange={handleChangePrice}
                    value={formValues.precio}
                />
                {!priceLabel && (
                    <span style={{ color: "red" }}>
                        El precio debe ser mayor a 0
                    </span>
                )}
            </div>
            <div>
                <label>Stock</label>
                <input
                    type="number"
                    name="stock"
                    onChange={handleChangeStock}
                    value={formValues.stock}
                />
                {!stockLabel && (
                    <span style={{ color: "red" }}>
                        El precio debe ser mayor a 0
                    </span>
                )}
            </div>
            <div>
                <label>Código</label>
                <input
                    type="text"
                    name="codigo"
                    onChange={handleChangeFormValue}
                    value={formValues.codigo}
                />
            </div>
            <div>
                <label>Categoría</label>
                <input
                    type="text"
                    name="categoria"
                    onChange={handleChangeFormValue}
                    value={formValues.categoria}
                />
            </div>
            <div>
                <label>Thumbnail</label>
                <input
                    type="text"
                    name="thumbnail"
                    onChange={handleChangeFormValue}
                    value={formValues.thumbnail}
                />
            </div>
            <div>
                <Link to={"/home"}>
                    <button>Home</button>
                </Link>
                <button disabled={!btnDisabled} type="submit">
                    Guardar
                </button>
                {Message}
            </div>
        </form>
    );
}

export default NewProduct;
