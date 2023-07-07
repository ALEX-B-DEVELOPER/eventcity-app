"use client";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminMenu from "@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import { useState } from 'react';


export default function Entradas() {


  const [eventos, setEventos] = useState ([{ eventoId: 0, nombreTicket: "", precio: 0, cantidadTickets: 0, porcentajeDescuento: 0 }]);
    axios.get(`http://localhost:3001/entradas`)
      .then(function (response) {
        setEventos(response.data)
      })
      .catch(function (error) { });

      const table = eventos.map((eventos) =>
              
      <tr>
        <td>{eventos.eventoId}</td>
        <td>{eventos.nombreTicket}</td>
        <td>{eventos.precio}</td>
        <td>{eventos.cantidadTickets}</td>
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
                <h1>Entradas</h1>
                <Link to={"/entradas/crear"} className="btn btn-primary">Nueva Entrada</Link>
                <hr />
              <br />

                  <table className="table" >
                  <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Ticket</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
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