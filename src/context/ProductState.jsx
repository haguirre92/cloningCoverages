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
       // console.log("Cobertura: "+codeCoverage);
        getTerm(codeCoverage);
        getCauses(codeCoverage);
        getCosts(codeCoverage);

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

        dispatch({
            type: 'GET_TERMS',
            payload: termsOfCoverage
        })
    }

    const getCauses = async (codeCoverage) => {
        const res = await axios.get('docs/Causes.xml', { "Content-Type": "aplication/xml; charset=utf-8" })
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        const causesOfCoverage = [];
        data.forEach((cause) => {
            const childs = cause.children;
            childs.forEach((child) => {
                if (child.attributes['typelist'] === 'CoverageType' && child.attributes['code'] === codeCoverage) {
                    causesOfCoverage.push(cause);
                }
            });
        });

        dispatch({
            type: 'GET_CAUSES',
            payload: causesOfCoverage
        })
    }

    const getCosts = async (codeCoverage) => {
        const res = await axios.get('docs/Costs.xml', { "Content-Type": "aplication/xml; charset=utf-8" })
        const jsonDataFromXML = new XMLParser().parseFromString(res.data);
        const data = jsonDataFromXML.getElementsByTagName('typecode');
        const costsOfCoverage = [];
        data.forEach((cost) => {
            const childs = cost.children;
            childs.forEach((child) => {
                if (child.attributes['typelist'] === 'CoverageType' && child.attributes['code'] === codeCoverage) {
                    costsOfCoverage.push(cost);
                }
            });
        });

        dispatch({
            type: 'GET_COSTS',
            payload: costsOfCoverage
        })
    }

    return (
        <ProductContext.Provider value={{
            products: state.products,
            productSelected: state.productSelected,
            terms: state.terms,
            causes: state.causes,
            costs: state.costs,
            coverageSelected: state.coverageSelected,
            getProducts,
            getCoverage,
            getTerm,
            getCauses,
            getCosts,
            queryInfoCoverage
        }}>
            {props.children}
        </ProductContext.Provider >
    )
}

export default ProductState;