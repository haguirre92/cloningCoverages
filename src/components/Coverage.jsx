import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';
//import { escapeRegExp } from "../utilities/readXML.js'";

const Coverage = () => {
    const { getProducts, getCoverage, productSelected, getTerm } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
        getCoverage();
    }, []);

    function concatWords(words){
        const textArrived = words.toString().split(',');
        const textJoined = textArrived.join(' ');
        return textJoined
    }

    function escapeRegExp(string) {
        const defaultComillasRemovalMap = [
            { 'base': 'ó', 'letters': /&#243;/g },
            { 'base': 'í', 'letters': /&#237;/g },
            { 'base': 'é', 'letters': /&#233;/g },
            { 'base': 'ñ', 'letters': /&#241;/g },
            { 'base': 'á', 'letters': /&#225;/g },
            { 'base': 'ú', 'letters': /&#250;/g }
        ]
        const string1 = ' '.toString().concat(string, ' ');
        const separate = string1.toString().split(' ');
        var cont = 0;

        separate.forEach(pal => {
            cont++;
            defaultComillasRemovalMap.forEach(text => {
                if (pal.toString().search(text.letters) >= 1) {
                    separate.splice(cont, 0, pal.toString().replace(text.letters, text.base))
                    var i = separate.indexOf(pal);
                    separate.splice(i, 1)
                }
            })
        })
        return concatWords(separate)
    }
    
    return (
        <div className="col">
            <label >Coverage</label>
            <select className="form-control form-control-sm" onChange={(e) => getTerm(e.target.value)}>                             
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