import axios from "axios";
import { Link } from "react-router-dom";
import '../app/componentes/contenedores/contenedor-principal/contenedor-principal.css';
import Home from "./home";
import BotonPrincipal from "@/app/componentes/formularios/boton_principal";
import Evento from "./vista_evento";

export default async function EventosResultados() {

    var eventos = [{ id: "", nombre: "", inicia: "", finaliza: "", lugar: "", mapaUbicacion: "", audiencia: "", categoria: "", imagen: "", descripcion: "" }];
    
    await axios.get(`http://localhost:3001/eventos`)
    .then((response) => {
         eventos = response.data;
         console.log(eventos)
    })

    return(

        <div className="container-fluid p-0">
            {<Home />} 
                    <div className='contenedor-principal'>
                    <div className="container">
                    <h3>Resultados</h3>
                    <hr />
                    <br />

                        {eventos.map((number) =>
                
                        <div className="row resultados" >
                            <div className="col">
                                <img src={number.imagen}/>
                            </div>
                            <div className="col">
                                <h3>{number.nombre}</h3> <hr />
                                <strong><i className="bi bi-calendar3"></i> Inicia: {number.inicia} </strong><br />
                                <strong><i className="bi bi-calendar3"></i> Finaliza: {number.finaliza} </strong><br />
                                <strong><i className="bi bi-geo-alt-fill"></i>{number.lugar} </strong><br />
                                {number.descripcion} <br /> <br />
                                <Link to={"/eventos/"+number.id} className="btn btn-outline-primary btn-sm" >VER MÁS...</Link>

                            </div>
                        </div>
                        )}

                    </div>
                </div>
                </div>
    )
}