"use client";
import React, { useState } from 'react';
import '../contenedores/contenedor-formulario/contenedor-formulario.css'
import '../contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar.css'
import '../contenedores/contenedor-admin-panel/contenedor-admin-panel.css'
import InputText from '../formularios/input_texto';
import BotonPrincipal from '../formularios/boton_principal';
import axios from 'axios';


export default function AdminPanel() {
  
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

      <div className='contenedor-admin-sidebar'> 
        <h3>ADMINISTRADOR</h3>
        <img src='../../assets/profile.png'></img>
        <p><strong>Nombre Apellido</strong></p>
        <p><strong>correo@electronico.com</strong></p>
        <a href="#">Editar Perfil</a>
        <hr></hr>


    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">USUARIOS</a>
      <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">EVENTOS</a>
      <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">ENTRADAS</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">VENTAS</a>
    </div>
    <br />
    <a href="#">Cerrar Sessión</a>
    
      </div>

      <div className='contenedor-admin-panel'>

      </div>
    </div>
  )
}
