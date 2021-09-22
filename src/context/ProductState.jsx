import React, { useReducer } from "react";
import UseReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";
import XMLParser from 'react-xml-parser';
//PARA HACER LOS LOADERS PUEDO UTILIZAR UNA BANDERA QUE EMPIECE EN FALSE CUANDO SEA INVOCADO CADA
//FUNCION Y CUANDO ESTA YA TERMINE CAMBIARLE EL VALOR POR TRUE
const ProductState = (props) => {
    const initialState = {
        product: 'CPTest',
        coverage: 'CPTestCov',
        products: [],
        productsTranslated: [],
        productSelected: [],
        terms: [],
        causes: [],
        costs: [],
        loader: false
    }
    const [state, dispatch] = useReducer(UseReducer, initialState)

    const getProducts = async () => {
       // activeOrDesactiveLoader(true)
        const res = await axios.get('docs/Products.xml', { "Content-Type": "aplication/xml; charset=utf-8" });
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        })
        //activeOrDesactiveLoader(false)
    }

    const getProductsTranslated = async() => {
         const res = await axios.get('docs/typekeys.txt', { "Content-Type": "aplication/txt; charset=utf-8" });
         //const data = res.data
         res.then((result) => {
            const data=result.data
            dispatch({
                type: 'GET_PRODUCTSTRANSLATED',
                payload: data
            })
            //console.log(result.data);  
        })
         
     }
    const activeOrDesactiveLoader = (value) => {
       // console.log('cargando: '+value)
        dispatch({
            type: 'GET_LOADER',
            payload: value
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

        dispatch({
            type: 'GET_PRODUCT',
            payload: code
        })
    }

    const queryInfoCoverage = (codeCoverage) => {
        // console.log('tenemos: '+codeCoverage)
        if (typeof codeCoverage !== 'undefined') {
            extractInfoOfCoverage(codeCoverage)
        } else {
            console.log('no tenemos nada para trabajar: ' + codeCoverage)
        }
        //agregando la cobertura a los estados
        dispatch({
            type: 'GET_COVERAGE',
            payload: codeCoverage
        })
    }

    const extractInfoOfCoverage = (codeCoverage) => {
        const sources = ['Terms', 'Causes', 'Costs'];
        sources.forEach(source => {
            getData(source, codeCoverage)
        })
    }

    const getData = async (source, codeCoverage) => {
        activeOrDesactiveLoader(true)
        const route = 'docs/' + source + '.xml';
        const patch = 'GET_' + source.toUpperCase();
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
        activeOrDesactiveLoader(false)
    }

    return (
        <ProductContext.Provider value={{
            product: state.product,
            coverage: state.coverage,
            products: state.products,
            productsTranslated: state.productsTranslated,
            productSelected: state.productSelected,
            terms: state.terms,
            causes: state.causes,
            costs: state.costs,
            loader: state.loader,
            getProducts,
            getProductsTranslated,
            getCoverage,
            queryInfoCoverage,
            extractInfoOfCoverage
        }}>
            {props.children}
        </ProductContext.Provider >
    )
}

export default ProductState;