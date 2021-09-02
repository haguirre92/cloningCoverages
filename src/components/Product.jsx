import React from "react";

const Product = () => (
    <div className="col">
        <label htmlFor="">Producto</label>
        <select className="form-control form-control-sm">
            <option>Incendio</option>
            <option>Transporte</option>
        </select>
    </div>
);

export default Product