import axios from "axios";
import '../app/componentes/contenedores/contenedor-principal/contenedor-principal.css';
import Buscador from "./buscador";

export default async function VistaEvento(id: string) {

    var evento = {      nombre: "", 
                        inicia: "", 
                        finaliza: "", 
                        lugar: "", 
                        mapaUbicacion: "", 
                        audiencia: "", 
                        categoria: "", 
                        imagen: "", 
                        descripcion: "" };
    
    await axios.get(`http://localhost:3001/eventos/`+ id)
    .then((response) => {
         evento = response.data;
         console.log(evento)
    })

    return(

        <div className="container-fluid p-0">
            {<Buscador />} 
                    <div className='contenedor-principal'>
                    <div className="container">
                    <h3>Resultados</h3>
                    <hr />
                    <br />
                
                        <div className="row resultados" >
                            <div className="col">
                                <img src={evento.imagen}/>
                            </div>
                            <div className="col">
                                <h3>{evento.nombre}</h3> <hr />
                                <strong><i className="bi bi-calendar3"></i> Inicia: {evento.inicia} </strong><br />
                                <strong><i className="bi bi-calendar3"></i> Finaliza: {evento.finaliza} </strong><br />
                                <strong><i className="bi bi-geo-alt-fill"></i>{evento.lugar} </strong><br />
                                {evento.descripcion} <br /> <br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}