import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import axios from "axios";
const Product = () => {
    const { products, getProducts, getCoverage, getProductsTranslated } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
       // getProductsTranslated();
    }, []);
    
    //console.log(getProductsTranslated()); 
    /*getProductsTranslated().forEach(element => {
       
    });
    function translateProduct(){
        var nameProducts = ''
        const res = axios.get('docs/typekeys.txt', { "Content-Type": "aplication/txt; charset=utf-8" });
        res.then((result) => {
            nameProducts=result.data
            //console.log(result.data);  
        })
        console.log(nameProducts); 
    }*/
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