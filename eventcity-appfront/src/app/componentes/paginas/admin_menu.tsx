"use client";
import React, { useState } from 'react';
import '../contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Image from "next/image";
import UserImg from "@/app/assets/profile.png";


export default function AdminMenu() {
  
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

      <div className='contenedor-admin-sidebar'> 
        <h3>ADMINISTRADOR</h3>
        <Image className="image-profile" src={UserImg} alt="User" />
        <p><strong>{sessionStorage.getItem("nombre")}</strong></p>
        <p><strong>correo@electronico.com</strong></p>
        <a href="#" className="btn btn-secondary btn-sm">Editar Perfil</a>
        <br />
        <br />


    <div className="list-group" id="list-tab" role="tablist">
      <Link className="nav-link list-group-item list-group-item-action" to="/usuarios">USUARIOS</Link>
      <Link className="nav-link list-group-item list-group-item-action" to="/eventos">EVENTOS</Link>
      <Link className="nav-link list-group-item list-group-item-action" to="/entradas">ENTRADAS</Link>
      <Link className="nav-link list-group-item list-group-item-action" to="/eventos">VENTAS</Link>
    </div>
    <br />
    <a href="#" className="btn btn-outline-danger btn-sm">SALIR</a>
    
      </div>
  )
}
