"use client";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminMenu from "@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';


export default async function Usuarios() {


    var log = [{ nombres: "", apellidos: "", correo: "", rolId: "" }]
    await axios.get(`http://localhost:3001/usuarios`)
      .then(function (response) {
        console.log(response.data);
        log = response.data
      })
      .catch(function (error) { });
  
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
                      {log.map((number) =>
              
                        <tr>
                          <td>{number.apellidos}</td>
                          <td>{number.nombres}</td>
                          <td>{number.correo}</td>
                          <td>{number.rolId}</td>
                          <td>
                          <Link to={""} className="btn btn-primary btn-sm">Editar</Link>
                          &nbsp;
                          <Link to={""} className="btn btn-secondary btn-sm">Eliminar</Link>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  </div>
                </div>
            </div>
      </div>
    )
}