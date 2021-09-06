import ReactChild from "react";

const Costcategory = () => (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Categorias de costo
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Presenta las Categorias de costo</strong> Va a contener todos las categorias de costo que tiene la cobertura y va a permitir seleccionar cuales necesitamos en la nueva cobertura
      </div>
    </div>
  </div>
);

export default Costcategory;