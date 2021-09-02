import React from "react";
import Term from "./Term";
import Costcategory from "./CostCategory";
import Losscause from "./LossCause";

const Infocoverage = () => (
    <div className="container">
        <h3>Información de la cobertura a clonar</h3>
        <div className="accordion" id="accordionExample">
            <Term></Term>
            <Costcategory></Costcategory>
            <Losscause></Losscause>
        </div>
    </div>
)

export default Infocoverage;