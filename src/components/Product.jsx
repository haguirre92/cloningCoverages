import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';

const Product = () => {
    const { products, getProducts, getCoverage } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="col">
            <label >Producto</label>
            <select className="form-control form-control-sm" onChange={(e) => getCoverage(e.target.value)}>
                {
                    products.map(pr => (
                        <option value={pr.attributes['code']} key={pr.attributes['code']}>
                            {pr.attributes['name']}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
export default Product