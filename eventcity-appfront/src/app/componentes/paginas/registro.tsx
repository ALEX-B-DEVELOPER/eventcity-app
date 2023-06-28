"use client";
import React, { useState } from 'react';
import '../contenedores/contenedor-formulario/contenedor-formulario.css'
import '../contenedores/contenedor-display/contenedor-display.css'
import InputText from '../formularios/input_texto';
import BotonPrincipal from '../formularios/boton_principal';
import axios from 'axios';


export default function Registro() {
  
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
        <h1>REGÍSTRATE EN <br/>NUESTRA PLATAFORMA<br/>PARA QUE NO TE PIERDAS <br/>NINGÚN EVENTO...</h1>
        <br />
        <br />
        <p>Si quieres registrarte como organizador contáctanos haciendo click aquí. </p>
      </div>

      <div className='col-sm-4 contenedor-formulario'>
        <h1>REGISTRO</h1>
        <br />
        <InputText id='nombres' hint="Nombres" type='text' handleInput={handleInput} />
        <br />
        <InputText id='apellidos' hint="Apellidos" type='text' handleInput={handleInput} />
        <br />
        <InputText id='id' hint="# CC/CE/NIT" type='text' handleInput={handleInput} />
        <br />
        <InputText id='telefono' hint="Teléfono" type='text' handleInput={handleInput} />
        <br />
        <InputText id='correo' hint="Correo" type='text' handleInput={handleInput} />
        <br />
        <InputText id='contrasena' hint="Contraseña" type='password' handleInput={handleInput} />
        <br />
        <a href="#">Acepto términos y condiciones.</a>
        <br />
        <br />
        <BotonPrincipal texto='Registrarse' callBack={login} />
        <br />        
      </div>

      </div>
    </div>
  )
}
