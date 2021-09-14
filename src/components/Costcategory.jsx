import ReactChild from "react";
import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import escapeRegExp from "../utilities/readXML";

const Costcategory = () => {
  const { costs } = useContext(ProductContext);

  useEffect(() => {
  }, []);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
          Categorias de costo
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {
            costs.map(item => {
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

export default Costcategory;