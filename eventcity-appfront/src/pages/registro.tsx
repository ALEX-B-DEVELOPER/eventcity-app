"use client";
import React, { useState } from 'react';

import '@/app/componentes/contenedores/contenedor-formulario/contenedor-formulario.css';
import '@/app/componentes/contenedores/contenedor-display/contenedor-display.css';
import InputText from '@/app/componentes/formularios/input_texto';
import BotonPrincipal from '@/app/componentes/formularios/boton_principal';

import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export default function Registro() {

  const navigate = useNavigate() 

  const [Nombres, setNombres] = useState('')
  const [Apellidos, setApellidos] = useState('')
  const [Telefono, setTelefono] = useState('')
  const [Correo, setCorreo] = useState('')
  const [Contrasena, setContrasena] = useState('')

  const handleNombres = (e: string)=>{
    setNombres(e)
}
const handleApellidos = (e: string)=>{
    setApellidos(e)
}
const handleTelefono = (e: string)=>{
    setTelefono(e)
}
const handleCorreo = (e: string)=>{
    setCorreo(e)
}
const handleContrasena = (e: string)=>{
    setContrasena(e)
}

  const registrarUsuario = () => {
    axios.post(`http://localhost:3001/usuarios`,{
        nombres: Nombres,
        apellidos: Apellidos,
        correo: Correo,
        contrena: Contrasena,
        telefono: Telefono
    })

    Swal.fire(
        'Nuevo Usuario',
        'Usuario registrado exitosamente',
        'success'
      )
      navigate("/");
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
        <InputText id='nombres' hint="Nombres" type='text' handleInput={handleNombres} />
        <InputText id='apellidos' hint="Apellidos" type='text' handleInput={handleApellidos} />
        <InputText id='telefono' hint="Teléfono" type='text' handleInput={handleTelefono} />
        <InputText id='correo' hint="Correo" type='text' handleInput={handleCorreo} />
        <InputText id='contrasena' hint="Contraseña" type='password' handleInput={handleContrasena} />
        <a href="#">Acepto términos y condiciones.</a>
        <br />
        <br />
        <BotonPrincipal texto='Registrarse' callBack={registrarUsuario} />
        <br />        
      </div>

      </div>
    </div>
  )
}
