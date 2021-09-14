import React, { useReducer } from "react";
import UseReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";
import XMLParser from 'react-xml-parser';

const ProductState = (props) => {
    const initialState = {
        products: [],
        productSelected: [],
        coverageSelected: '',
        terms: []
    }
    const [state, dispatch] = useReducer(UseReducer, initialState)

    const getProducts = async () => {
        const res = await axios.get('docs/Products.xml', { "Content-Type": "aplication/xml; charset=utf-8" });
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        })
    }    

    const getCoverage = async (code) => {
        const res = await axios.get('docs/Coverage.xml', { "Content-Type": "aplication/xml; charset=utf-8" })
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        const coveragesOfProd = [];
        data.forEach((coverage) => {
            const childs = coverage.children;
            childs.forEach((child) => {
                if (child.attributes['typelist'] === 'OfferingType_Ext' && child.attributes['code'] === code) {
                    coveragesOfProd.push(coverage);
                }
            });
        });

        //fixTextInCoverage(coveragesOfProd);
        dispatch({
            type: 'GET_COVERAGES',
            payload: coveragesOfProd
        })
    }

    const getTerm = async (codeCoverage) => {
        const res = await axios.get('docs/Terms.xml', { "Content-Type": "aplication/xml; charset=utf-8" })
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        const termsOfCoverage = [];
        data.forEach((term) => {
            const childs = term.children;
            childs.forEach((child) => {
                if (child.attributes['typelist'] === 'CoverageType' && child.attributes['code'] === codeCoverage) {
                    termsOfCoverage.push(term);
                }
            });
        });

        //fixTextInCoverage(coveragesOfProd);
        dispatch({
            type: 'GET_TERMS',
            payload: termsOfCoverage
        })
    }

    return (
        <ProductContext.Provider value={{
            products: state.products,
            productSelected: state.productSelected,
            terms: state.terms,
            coverageSelected:  state.coverageSelected,
            getProducts,
            getCoverage,
            getTerm
        }}>
            {props.children}
        </ProductContext.Provider >
    )
}

export default ProductState;