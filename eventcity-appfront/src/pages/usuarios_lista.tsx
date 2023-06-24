"use client";
import React, { useState } from 'react';
import axios from 'axios';

export default function Usuarios() {

  console.log("Entro a la funcion usuarios");
  const Usuarios = async () => {
    var log = [{ nombres: "", apellidos: "", correo: "" }]
    await axios.get(`http://localhost:3001/usuarios`)
      .then(function (response) {
        console.log("Entro a la promesa");
        console.log(response.data);
        log = response.data
  
      })
      .catch(function (error) {
  
      });
  
    return (
      <div>
        <table className="table">
          <tbody>
            {log.map((number) =>
              <tr>
                <td>{number.apellidos}</td>
                <td>{number.nombres}</td>
                <td>{number.correo}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  
  }
  return (
    <div>
      <div>
        <li>
        {Usuarios()}
        </li>
      </div>
    </div>
  )
}
