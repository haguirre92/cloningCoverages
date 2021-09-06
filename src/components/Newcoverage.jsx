import React from "react";


const Newcoverage = ({ title }) => (
    <div className="container">
        <div className="container-md">
            <div className="mb-3">
                <label htmlFor="labeFormControlName" className="form-label">Ingresar nombre de nueva cobertura</label>
                <input type="text" className="form-control" id="formControlInput1" placeholder="Lucro cesante (Español)" />
                <br />
                <input type="text" className="form-control" id="formControlInput1" placeholder="Loss of profit (Ingles)" />
            </div>
        </div>
    </div>
);

export default Newcoverage;