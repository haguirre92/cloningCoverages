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
import { render } from 'react-dom';

const { Provider, Consumer } = React.createContext();
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ''
        }
    }
render(){
    return (
        <Provider value={{
            product: this.state.product
          }}>
            <div className="container">
                <Header />
                <Newcoverage title="Clonación de coberturas" />
                <div className="row">
                    <Producto></Producto>
                    <Coverage></Coverage>
                </div>
                <br />
                <Infocoverage></Infocoverage>
            </div>
            </Provider>
    );
}
}

export default App;