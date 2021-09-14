import React, { useReducer } from "react";
import UseReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";
import XMLParser from 'react-xml-parser';

const ProductState = (props) => {
    const initialState = {
        products: [],
        productSelected: [],
        terms: [],
        causes: [],
        costs: []
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

        dispatch({
            type: 'GET_COVERAGES',
            payload: coveragesOfProd
        })
    }

    const queryInfoCoverage = (codeCoverage) => {
       // console.log('tenemos: '+codeCoverage)
        if(typeof codeCoverage !== 'undefined'){
            extractInfoOfCoverage(codeCoverage)
        }else{
            console.log('no tenemos nada para trabajar: '+codeCoverage)
        }        
    }

    const extractInfoOfCoverage = (codeCoverage) => {
        const sources = ['Terms','Causes','Costs'];
        sources.forEach(source => {
            getData(source,codeCoverage)
        })
    }

    const getData = async (source,codeCoverage) => {
        const route = 'docs/'+source+'.xml';
        const patch = 'GET_'+source.toUpperCase();
        const res = await axios.get(route, { "Content-Type": "aplication/xml; charset=utf-8" })
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        const infoOfCoverage = [];
        data.forEach((term) => {
            const childs = term.children;
            childs.forEach((child) => {
                if (child.attributes['typelist'] === 'CoverageType' && child.attributes['code'] === codeCoverage) {
                    infoOfCoverage.push(term);
                }
            });
        });

        dispatch({
            type: patch,
            payload: infoOfCoverage
        })
    }

    return (
        <ProductContext.Provider value={{
            products: state.products,
            productSelected: state.productSelected,
            terms: state.terms,
            causes: state.causes,
            costs: state.costs,
            getProducts,
            getCoverage,
            queryInfoCoverage,
            extractInfoOfCoverage
        }}>
            {props.children}
        </ProductContext.Provider >
    )
}

export default ProductState;