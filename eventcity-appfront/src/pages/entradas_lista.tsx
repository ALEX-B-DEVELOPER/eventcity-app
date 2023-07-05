"use client";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminMenu from "@/app/componentes/paginas/admin_menu";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';


export default async function Entradas() {


    var log = [{ eventoId: 0, nombreTicket: "", precio: 0, cantidadTickets: 0, porcentajeDescuento: 0 }]
    await axios.get(`http://localhost:3001/entradas`)
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
                      {log.map((number) =>
              
                        <tr>
                          <td>{number.eventoId}</td>
                          <td>{number.nombreTicket}</td>
                          <td>{number.precio}</td>
                          <td>{number.cantidadTickets}</td>
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