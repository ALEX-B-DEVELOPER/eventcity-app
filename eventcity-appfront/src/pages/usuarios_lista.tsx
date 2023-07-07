"use client";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminMenu from "@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import { useState } from 'react';


export default function Usuarios() {


    const [usuarios, setUsuarios] = useState ([{ nombres: "", apellidos: "", correo: "", rolId: "" }]);
    axios.get(`http://localhost:3001/usuarios`)
      .then(function (response) {
        setUsuarios(response.data)
      })
      .catch(function (error) { })

    const table = usuarios.map((usuarios, i) =>
              
          <tr key={i}>
            <td>{usuarios.apellidos}</td>
            <td>{usuarios.nombres}</td>
            <td>{usuarios.correo}</td>
            <td>{usuarios.rolId}</td>
            <td>
            <Link to={""} className="btn btn-primary btn-sm">Editar</Link>
            &nbsp;
            <Link to={""} className="btn btn-secondary btn-sm">Eliminar</Link>
            </td>
          </tr>
        )
  
    return (
      <div className="container">
      <div className="row">

          <div className='col-sm-3'> 
          {<AdminMenu />} 
          </div>

          <div className='col-sm-9'> 
              <div className='contenedor-admin-panel'>
                <h1>Usuarios</h1>
                <Link to={"/usuarios/crear"} className="btn btn-primary">Nuevo Usuario</Link>
                <hr />
              <br />

                  <table className="table" >
                  <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Rol de usuario</th>
                                <th>Acciones: Editar/Eliminar</th>
                            </tr>
                    </thead>
                    <tbody>
                      {table}
                    </tbody>
                  </table>
                  </div>
                </div>
            </div>
      </div>
    )
}