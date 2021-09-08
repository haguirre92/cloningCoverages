import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';

const Coverage = () => {
    const { productSelected } = useContext(ProductContext);

    useEffect(() => {
    }, []);

    return (
        <div className="col">
            <label >Coverage</label>
            <select className="form-control form-control-sm">
                {
                    productSelected.map(item => {
                        return (
                            <option key={item.attributes['code']}>{item.attributes['name']}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Coverage