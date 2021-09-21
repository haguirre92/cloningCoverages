import ReactChild from "react";
import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import escapeRegExp from "../utilities/readXML";

const Losscause = () => {
  const { causes } = useContext(ProductContext);

  useEffect(() => {
  }, []);

  var cont = 0
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          Causas de perdida
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {
            causes.map(item => {
              cont++
              return (
                <div key={item.attributes['code']+'-'+cont}>
                  <input className="form-check-input" type="checkbox" value={item.attributes['code']} defaultChecked />
                  <label className="form-check-label" style={{ marginLeft: "0.5%" }}>
                  {escapeRegExp(item.attributes['name'])}
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Losscause;