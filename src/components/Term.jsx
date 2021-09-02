import ReactChild from "react";

const Term = () => (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Terminos
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Presenta los terminos</strong> Va a contener todos los terminos que tiene la cobertura y va a permitir seleccionar cuales necesitamos en la nueva cobertura
      </div>
    </div>
  </div>
);

export default Term;