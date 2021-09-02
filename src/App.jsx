import { useState } from "react";
import "./App.css"
import "./App.scss"
import logo from "./middle.png"

function App(){
    const [name, setName] = useState("");
    return(
        <div className="app">
            <h1>Cloning masive of coverages!!!</h1>
            <img src="{logo}" alt="imagen de react" width="25"/>
            <div>
                <label htmlFor="name">New name of coverage:</label>
                <input type="text" id="newCoverage" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
    );
}

export default App;