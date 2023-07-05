"use client";
import React, { useState } from 'react';
import '../contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <img src='https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0='></img>
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
