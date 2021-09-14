import ReactChild from "react";
import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';

const Losscause = () => {
  const { causes } = useContext(ProductContext);

  useEffect(() => {
  }, []);

  function concatWords(words) {
    const textArrived = words.toString().split(',');
    const textJoined = textArrived.join(' ');
    return textJoined
  }

  function escapeRegExp(string) {
    const defaultComillasRemovalMap = [
      { 'base': 'ó', 'letters': /&#243;/g },
      { 'base': 'í', 'letters': /&#237;/g },
      { 'base': 'é', 'letters': /&#233;/g },
      { 'base': 'ñ', 'letters': /&#241;/g },
      { 'base': 'á', 'letters': /&#225;/g },
      { 'base': 'ú', 'letters': /&#250;/g }
    ]
    const string1 = ' '.toString().concat(string, ' ');
    const separate = string1.toString().split(' ');
    var cont = 0;

    separate.forEach(pal => {
      cont++;
      defaultComillasRemovalMap.forEach(text => {
        if (pal.toString().search(text.letters) >= 1) {
          separate.splice(cont, 0, pal.toString().replace(text.letters, text.base))
          var i = separate.indexOf(pal);
          separate.splice(i, 1)
        }
      })
    })
    return concatWords(separate)
  }

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

export default Losscause;