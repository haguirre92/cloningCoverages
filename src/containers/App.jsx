import React from 'react';
import { useState } from "react";
import "../assets/styles/App.css";
import "../assets/styles/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import Newcoverage from "../components/Newcoverage";
import Producto from "../components/Product";
import Coverage from "../components/Coverage";
import Infocoverage from "../components/Infocoverage";
import ProductState from '../context/ProductState';
import Buttons from '../components/SaveButton';
import { render } from 'react-dom';


function App() {
    return (
        <div className="container">
            <div className="row">
                <Header />
                <Buttons></Buttons>
            </div>
            <Newcoverage title="Clonación de coberturas" />
            <ProductState>
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