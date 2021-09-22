import axios from 'axios';
import React, { useEffect } from 'react';
import { useContext } from "react";
import ProductContext from '../context/ProductContext';



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
    const { product, coverage } = useContext(ProductContext);

    //const saveHandler = async() => {
    const saveHandler = () => {
        console.log('solicito el guardado')
        let obj = {product, coverage}
        //const res = await axios.post('http://localhost:9000/rewrite/post',obj)
        fetch('http://localhost:9000/rewrite/post', {
            method: 'POST',
            body: obj,
            mode: 'cors',
            headers: {
                "Content-Type": "text/plain"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
            .then(res => res.text())
            .then(res => console.log(res))
            .catch(err => (
                console.error(err)
            ))
        //console.log(res.data)
        console.log('tenemos producto: '+product+' y tenemos cobertura: '+coverage)
        
    }
    return (
        <div className='col' style={{ marginLeft: "15px", marginTop: "2%" }}>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-primary" onClick={callDocsHandler}>Cargar listas</button>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-secondary">Exportar cambios</button>
            <button style={{ marginLeft: "15px" }} type="button" className="btn btn-success" onClick={saveHandler}>Guardar</button>
        </div>
    );
}

export default SaveButton;