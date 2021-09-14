import ReactChild from "react";
import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import escapeRegExp from "../utilities/readXML";

const Term = () => {
  const { terms } = useContext(ProductContext);

  useEffect(() => {
  }, []);

  return (<div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Terminos
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {
          terms.map(item => {
            return (
              <div key={item.attributes['code']}>
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

export default Term;