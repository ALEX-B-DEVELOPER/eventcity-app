"use client";
import React from 'react';
import '@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar.css';
import { Link, useNavigate } from 'react-router-dom';

import Image from "next/image";
import UserImg from "@/app/assets/profile.png";
import Swal from 'sweetalert2';


export default function AdminMenu() {


  const navigate = useNavigate() 

  const logOut = async () => {
    sessionStorage.clear();
    Swal.fire(
      'Vuelva pronto',
      'Usted ha cerrado sessón correctamente',
      'success'
    )
    navigate("/");
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
    <a href="#" className="btn btn-outline-danger btn-sm" onClick={logOut}>SALIR</a>
    
      </div>
  )
}
