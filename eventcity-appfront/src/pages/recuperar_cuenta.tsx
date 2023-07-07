"use client";
import React, { useState } from 'react';

import '@/app/componentes/contenedores/contenedor-formulario/contenedor-formulario.css';
import '@/app/componentes/contenedores/contenedor-display/contenedor-display.css';
import InputText from '@/app/componentes/formularios/input_texto';
import BotonPrincipal from '@/app/componentes/formularios/boton_principal';

export default function Recuperar() {
  
  const [correo, setCorreo] = useState('')

  function handleInput(valor: string, name: string) {
    setCorreo(valor)
  }

  const sendEmail = async () => {
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
        <BotonPrincipal texto='Enviar' callBack={sendEmail} />
      </div>
      </div>
    </div>
  )
}
