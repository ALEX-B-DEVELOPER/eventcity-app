"use client";
import React, { useState } from 'react';
import '../contenedores/contenedor-formulario/contenedor-formulario.css'
import '../contenedores/contenedor-display/contenedor-display.css'
import InputText from '../formularios/input_texto';
import BotonPrincipal from '../formularios/boton_principal';
import axios from 'axios';


export default function Recuperar() {
  
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')

  function handleInput(valor: string, name: string) {
    console.log(valor, name);
    if (name === "correo") {
      setCorreo(valor)
    } else {
      setContrasena(valor)
    }
  }

  const SessionDataStorage = (valor: string, name:string) => {
    sessionStorage.setItem(name, valor);
  };


  const login = async () => {
    axios.post(`http://localhost:3001/autenticacion/login`, {
      correo: correo,
      contrasena: contrasena
    })
      .then(function (response) {
        console.log(response.data);
        SessionDataStorage(response.data.access_token, "token")
        SessionDataStorage(response.data.nombre, "nombre")
      })
      .catch(function (error) {
        console.log(error);

      });
  }
  return (
    <div className="container">
      <div className="row">

      <div className='col-sm-8 contenedor-display'> 
        <h1>REESTABLECIMIENTO<br/>DE CONTRASEÑA</h1>
      </div>

      <div className='col-sm-4 contenedor-formulario'>
        <h1>HE OLVIDADO <br /> LA CONTRASEÑA</h1>
        <br />
        Ingresa el correo electrónico registrado para recibir el reestablecimiento de la contraseña.
        <br />
        <br />
        <InputText id='correo' hint="Correo" type='text' handleInput={handleInput} />
        <br />
        <BotonPrincipal texto='Enviar' callBack={login} />
      </div>

      </div>
    </div>
  )
}
