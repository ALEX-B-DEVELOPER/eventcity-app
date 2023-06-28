import { useState } from "react";
import axios from "axios";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import BotonPrincipal from "@/app/componentes/formularios/boton_principal";
import InputText from "@/app/componentes/formularios/input_texto";
import AdminMenu from "@/app/componentes/paginas/admin_menu";
import { Link } from "react-router-dom";


export default function FormularioCrearEvento(){

    const [Nombre, setNombre] = useState('')
    const [Inicia, setInicia] = useState('')
    const [Finaliza, setFinaliza] = useState('')
    const [Direccion, setDireccion] = useState('')
    const [MapaUbicacion, setMapaUbicacion] = useState('')
    const [Audiencia, setAudiencia] = useState('')
    const [TipoEvento, setTipoEvento] = useState('')
    const [Imagen, setImagen] = useState('')
    const [Descripcion, setDescrpcion] = useState('')

    const handleNombre = (e: string)=>{
        setNombre(e)
    }
    const handleInicia = (e: string)=>{
        setInicia(e)
    }
    const handleFinaliza = (e: string)=>{
        setFinaliza(e)
    }
    const handleDireccion = (e: string)=>{
        setDireccion(e)
    }
    const handleMapaUbicacion = (e: string)=>{
        setMapaUbicacion(e)
    }
    const handleAudiencia = (e: string)=>{
        setAudiencia(e)
    }
    const handleTipoEvento = (e: string)=>{
        setTipoEvento(e)
    }
    const handleImagen = (e: string)=>{
        setImagen(e)
    }
    const handleDescripcion = (e: string)=>{
        setDescrpcion(e)
    }

    const registrarEvento = () => {
        axios.post(`http://localhost:3001/eventos`,{
            nombre: Nombre,
            inicia: Inicia,
            finaliza: Finaliza,
            lugar: Direccion,
            mapaLugar: MapaUbicacion,
            audiencia: Audiencia,
            categoria: TipoEvento,
            imagen: Imagen,
            descripcion: Descripcion
        })
    }

    return(
        <div className="container">
            <div className="row">
    
                <div className='col-sm-3'> 
                {<AdminMenu />} 
                </div>

                <div className='col-sm-9'> 
                    <div className='contenedor-admin-panel'>

                            <h1>Nuevo Evento</h1>
                            <Link to={"/eventos"} className="btn btn-primary">Atrás | Eventos</Link>
                            <hr />
                            <InputText hint="Nombre del Evento" id="nombre" type="text" handleInput={handleNombre}/>
                            <InputText hint="Inicia - Fecha/Hora" id="inicia" type="datetime-local" handleInput={handleInicia}/>
                            <InputText hint="Finaliza - Fecha/Hora" id="finaliza" type="datetime-local" handleInput={handleFinaliza}/>
                            <InputText hint="Dirección" id="direccion" type="text" handleInput={handleDireccion}/>
                            <InputText hint="Mapa ubicación" id="mapaUbicacion" type="textarea" handleInput={handleMapaUbicacion}/>
                            <InputText hint="Audiencia" id="audiencia" type="text" handleInput={handleAudiencia}/>
                            <InputText hint="Tipo de Evento" id="tipo" type="text" handleInput={handleTipoEvento}/>
                            <InputText hint="Imagen" id="imagen" type="text" handleInput={handleImagen}/>
                            <InputText hint="Descripción" id="imagen" type="text" handleInput={handleDescripcion}/>
                            <br />
                            <BotonPrincipal texto="Crear Evento" callBack={registrarEvento}></BotonPrincipal>
                        </div>
                    </div>
                </div>
            </div>
    )

}