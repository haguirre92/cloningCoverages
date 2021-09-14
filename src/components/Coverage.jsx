import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import escapeRegExp from "../utilities/readXML";

const Coverage = () => {
    const { getProducts, getCoverage, productSelected, queryInfoCoverage } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
        getCoverage();
        queryInfoCoverage()
    }, []);

    function concatWords(words){
        const textArrived = words.toString().split(',');
        const textJoined = textArrived.join(' ');
        return textJoined
    }
    
    return (
        <div className="col">
            <label >Coverage</label>
            <select className="form-control form-control-sm" onChange={(e) => queryInfoCoverage(e.target.value)}>                             
                {                   
                    productSelected.map(item => {
                        return (
                            <option value={item.attributes['code']} key={item.attributes['code']}>{escapeRegExp(item.attributes['name'])}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Coverage