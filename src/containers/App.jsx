import React, { Suspense } from 'react';
import { useState } from "react";
import "../assets/styles/App.css";
import "../assets/styles/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Newcoverage from "../components/Newcoverage";
import Producto from "../components/Product";
import Coverage from "../components/Coverage";
//const Infocoverage = React.lazy(() => import("../components/Infocoverage"))
import Infocoverage from '../components/Infocoverage';
import ProductState from '../context/ProductState';
import Buttons from '../components/SaveButton';
import { render } from 'react-dom';


function App() {
    return (
        <div className="container">
            <ProductState>
                <div className="row">
                    <div className="col">
                        <h2>Clonación de coberturas</h2>
                    </div>
                    <Buttons></Buttons>
                </div>
                <Newcoverage title="Clonación de coberturas" />
                <div className="row">
                    <Producto></Producto>
                    <Coverage></Coverage>
                </div><br />
                <Infocoverage></Infocoverage>
            </ProductState>
        </div>
    );
}

export default App;