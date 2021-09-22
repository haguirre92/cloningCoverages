import React from 'react'

const callDocsHandler = () => {
    console.log('llamando archivos...');

    fetch('http://localhost:9000/carga/post', {
        method: 'POST',
        body: 'damelos'
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => (
        console.error(err)
    ))
}

const SaveButton = () => {

    return (
        <div className='col' style={{ marginLeft: "15px", marginTop: "2%" }}>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-primary" onClick={callDocsHandler}>Cargar listas</button>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-secondary">Exportar cambios</button>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-success">Guardar</button>
        </div>
    );
}

export default SaveButton;