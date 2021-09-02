import ReactChild from "react";

const Losscause = () => (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Causas de perdida
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Presenta las Causas</strong> Va a contener todos las causas de perdida que tiene la cobertura y va a permitir seleccionar cuales necesitamos en la nueva cobertura
      </div>
    </div>
  </div>
);

export default Losscause;