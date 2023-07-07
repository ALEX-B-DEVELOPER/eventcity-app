import axios from "axios";
import { Link } from "react-router-dom";
import AdminMenu from "@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import { useState } from "react";



export default function Eventos() {

    const [eventos, setEventos] = useState ([{ nombre: "", inicia: "", finaliza: "", direccion: "", mapaUbicacion: "", audiencia: "", categoria: "", imagen: "", descripcion: "" }]);
    
    axios.get(`http://localhost:3001/eventos`)
    .then((response) => {
        setEventos(response.data)
    })

    const table = eventos.map((number) =>
                
    <tr>
        <td>{number.nombre}</td>
        <td>{number.inicia}</td>
        <td>{number.finaliza}</td>
        <td><img src={number.imagen}/></td>
        <td>
            <Link to={""} className="btn btn-primary btn-sm">Editar</Link>
            &nbsp;
            <Link to={""} className="btn btn-secondary btn-sm">Eliminar</Link>
        </td>
    </tr>
    )

    return(

        <div className="container">
            <div className="row">
    
                <div className='col-sm-3'> 
                {<AdminMenu />} 
                </div>

                <div className='col-sm-9'> 
                    <div className='contenedor-admin-panel'>
                    <h1>Eventos</h1>
                    <Link to={"/eventos/crear"} className="btn btn-primary">Nuevo Evento</Link>
                    <hr />
                    <br />
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Nombre del Evento</th>
                                <th>Hora de inicio</th>
                                <th>Hora de fin</th>
                                <th>Imagen</th>
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