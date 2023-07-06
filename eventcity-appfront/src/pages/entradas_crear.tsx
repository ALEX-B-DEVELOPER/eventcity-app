import { useState } from "react";
import axios from "axios";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import BotonPrincipal from "@/app/componentes/formularios/boton_principal";
import InputText from "@/app/componentes/formularios/input_texto";
import AdminMenu from "@/app/componentes/paginas/admin_menu";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


export default function FormularioCrearEntrada(){

    const [EventoId, setEventoId] = useState('')
    const [NombreTicket, setNombreTicket] = useState('')
    const [Precio, setPrecio] = useState('')
    const [CantidadTickets, setCantidadTickets] = useState('')
    const [PorcentajeDescuento, setPorcentajeDescuento] = useState('')

    const handleEventoId = (e: string)=>{
        setEventoId(e)
    }
    const handleNombreTicket = (e: string)=>{
        setNombreTicket(e)
    }
    const handlePrecio = (e: string)=>{
        setPrecio(e)
    }
    const handleCantidadTickets = (e: string)=>{
        setCantidadTickets(e)
    }
    const handlePorcentajeDescuento = (e: string)=>{
        setPorcentajeDescuento(e)
    }

    const registrarEntrada = () => {
        axios.post(`http://localhost:3001/entradas`,{
            eventoId: EventoId,
            nombreTicket: NombreTicket,
            precio: Precio,
            cantidadTickets: CantidadTickets,
            porcentajeDescuento: PorcentajeDescuento
        })
        
        Swal.fire(
            'Nueva Entrada',
            'Entrada registrada exitosamente',
            'success'
          )
    }

    return(
        <div className="container">
            <div className="row">
    
                <div className='col-sm-3'> 
                {<AdminMenu />} 
                </div>

                <div className='col-sm-9'> 
                    <div className='contenedor-admin-panel'>

                            <h1>Nueva Entrada</h1>
                            <Link to={"/entradas"} className="btn btn-primary">Atrás | Entradas</Link>
                            <hr />
                            <form>
                            <div className="form-group row">
                                <label className="col-sm-3" >EVENTO</label>
                                <div className="col-sm-9">
                                <InputText hint="# ID del Evento" id="evento-id" type="text" handleInput={handleEventoId}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >TICKET</label>
                                <div className="col-sm-9">
                                <InputText hint="Nombre de ticket" id="nombre-ticket" type="text" handleInput={handleNombreTicket}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >($) PRECIO</label>
                                <div className="col-sm-9">
                                <InputText hint="Precio de ticket" id="precio" type="textarea" handleInput={handlePrecio}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >(#) CANTIDAD</label>
                                <div className="col-sm-9">
                                <InputText hint="Cantidad de tickes" id="cantidad" type="text" handleInput={handleCantidadTickets}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >(%) DESCUENTO</label>
                                <div className="col-sm-9">
                                <InputText hint="Porcentaje de descuento" id="descuento" type="text" handleInput={handlePorcentajeDescuento}/>
                                </div>
                            </div>

                            <br />
                            <BotonPrincipal texto="Crear Entrada" callBack={registrarEntrada}></BotonPrincipal>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )

}