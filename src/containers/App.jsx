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
import { render } from 'react-dom';

/*class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ''
        }
    }*/
    function App() {
        return (
            <div className="container">
                <Header />
                <Newcoverage title="Clonación de coberturas" />
               <ProductState>
                <div className="row">
                    <Producto></Producto>
                    <Coverage></Coverage>
                </div>
                </ProductState>
                <br />
                <Infocoverage></Infocoverage>
            </div>
        );
    }
//}

export default App;