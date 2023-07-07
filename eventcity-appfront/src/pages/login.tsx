"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import '@/app/componentes/contenedores/contenedor-formulario/contenedor-formulario.css';
import '@/app/componentes/contenedores/contenedor-display/contenedor-display.css';
import InputText from '@/app/componentes/formularios/input_texto';
import BotonPrincipal from '@/app/componentes/formularios/boton_principal';


export default function Login() {

  const navigate = useNavigate() 
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
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="row">

      <div className='col-sm-8 contenedor-display'> 
        <h1>ACCEDE A <br/>NUESTRA <br/>PLATAFORMA <br/>DE EVENTOS</h1>
      </div>

      <div className='col-sm-4 contenedor-formulario'>
        <h1>BIENVENIDO</h1>
        <InputText id='correo' hint="Correo" type='text' handleInput={handleInput} />

        <InputText id='contrasena' hint="Contraseña" type='password' handleInput={handleInput} />

        <BotonPrincipal texto='Acceso' callBack={login} />
        <br />
        <br />
        <Link to="/registro">¿No tienes cuenta? Regístrate.</Link>
        <br />
        <Link to="/recuperar-cuenta">¿Perdiste tu contraseña? Click Aquí.</Link>
        <a href="#"></a>
      </div>

      </div>
    </div>
  )
}
