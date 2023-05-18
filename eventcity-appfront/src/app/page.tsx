"use client";
import React, {Fragment, useState} from 'react';
import axios from 'axios';
 
const Formulario = () => {
 
    const [datos, setDatos] = useState({
        firstName: '',
        lastName: ''
    })
 
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
 
    const enviarDatos = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/users', datos)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
       console.log(datos);
    }
 
    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="firstName"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="lastName"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.firstName}</li>
                <li>{datos.lastName}</li>
            </ul>
        </Fragment>
    );
}
 
export default function Home() {
  return (
    <Formulario/>
  )
}
