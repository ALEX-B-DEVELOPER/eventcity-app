"use client";
import React from 'react';
import '@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar.css';
import { Link } from 'react-router-dom';

import Image from "next/image";
import UserImg from "@/app/assets/profile.png";


export default function AdminMenu() {
  
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
