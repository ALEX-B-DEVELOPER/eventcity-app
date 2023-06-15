"use client";
import React, { useState } from 'react';
import './componentes/contenedores/contenedor-principal/contenedor-principal.css'
import './componentes/contenedores/contenedor-display/contenedor-display.css'
import InputText from '../formularios/input_texto';
import BotonPrincipal from '../formularios/boton_principal';
import axios from 'axios';


export default function Login() {
  
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

      <div className='contenedor-display'> 
        <h1>ACCEDE A <br/>NUESTRA <br/>PLATAFORMA <br/>DE EVENTOS</h1>
      </div>

      <div className='contenedor-principal'>
        <h1>BIENVENIDO</h1>
        <br />
        <InputText id='correo' hint="Correo" type='text' handleInput={handleInput} />
        <br />
        <InputText id='contrasena' hint="Contraseña" type='password' handleInput={handleInput} />
        <br />
        <BotonPrincipal texto='Acceso' callBack={login} />
        <br />
        <br />
        <a href="#">¿Perdiste tu contraseña? Click Aquí.</a>
        <br />
        <a href="#">¿No tienes cuenta? Regístrate.</a>
      </div>
    </div>
  )
}