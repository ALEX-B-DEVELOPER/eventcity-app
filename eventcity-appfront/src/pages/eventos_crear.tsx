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
    const [Categoria, setCategoria] = useState('')
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
    const handleCategoria = (e: string)=>{
        setCategoria(e)
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
            categoria: Categoria,
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
                            <form>
                            <div className="form-group row">
                                <label className="col-sm-3" >NOMBRE</label>
                                <div className="col-sm-9">
                                <InputText hint="Nombre del Evento" id="nombre" type="text" handleInput={handleNombre}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >HORA INICIO/FIN</label>
                                <div className="col-sm-5">
                                <InputText hint="Inicia - Fecha/Hora" id="inicia" type="datetime-local" handleInput={handleInicia}/>
                                </div>
                                <div className="col-sm-4">
                                <InputText hint="Finaliza - Fecha/Hora" id="finaliza" type="datetime-local" handleInput={handleFinaliza}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >DIRECCIÓN</label>
                                <div className="col-sm-9">
                                <InputText hint="Dirección" id="direccion" type="text" handleInput={handleDireccion}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >MAPA</label>
                                <div className="col-sm-9">
                                <InputText hint="Mapa ubicación" id="mapaUbicacion" type="textarea" handleInput={handleMapaUbicacion}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >AUDIENCIA</label>
                                <div className="col-sm-9">
                                <InputText hint="Audiencia" id="audiencia" type="text" handleInput={handleAudiencia}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >CATEGORÍA</label>
                                <div className="col-sm-9">
                                <InputText hint="Categoria" id="categoria" type="text" handleInput={handleCategoria}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >IMÁGEN</label>
                                <div className="col-sm-9">
                                <InputText hint="Imagen" id="imagen" type="text" handleInput={handleImagen}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >DESCRIPCIÓN</label>
                                <div className="col-sm-9">
                                <InputText hint="Descripción" id="imagen" type="text" handleInput={handleDescripcion}/>
                                </div>
                            </div>

                            <br />
                            <BotonPrincipal texto="Crear Evento" callBack={registrarEvento}></BotonPrincipal>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )

}