import { useState } from "react";
import "../assets/styles/App.css";
import "../assets/styles/App.scss";
import logo from "../assets/static/middle.png";
import Header from "../components/Header";
import Newcoverage from "../components/Newcoverage";
import Producto from "../components/Product";
import Coverage from "../components/Coverage";


function App() {
    const [name, setName] = useState("");
    return (
        <div className="container">
            <Header />
            <Newcoverage />
            <div className="row">
                <Producto></Producto>
                <Coverage></Coverage>
            </div>
        </div>
    );
}

export default App;