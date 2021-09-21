import React from 'react'

const SaveButton = () => {

    return (
        <div className='col' style={{ marginLeft: "15px", marginTop: "2%" }}>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-primary">Cargar listas</button>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-secondary">Exportar cambios</button>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-success">Guardar</button>
        </div>
    );
}

export default SaveButton;