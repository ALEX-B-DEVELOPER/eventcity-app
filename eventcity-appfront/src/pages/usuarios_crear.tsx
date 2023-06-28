import { useState } from "react";
import axios from "axios";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import BotonPrincipal from "@/app/componentes/formularios/boton_principal";
import InputText from "@/app/componentes/formularios/input_texto";
import AdminMenu from "@/app/componentes/paginas/admin_menu";
import { Link } from "react-router-dom";


export default function FormularioCrearUsuario(){

    const [Nombres, setNombres] = useState('')
    const [Apellidos, setApellidos] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Contrasena, setContrasena] = useState('')
    const [Direccion, setDireccion] = useState('')
    const [RolId, setRolId] = useState('')

    const handleNombres = (e: string)=>{
        setNombres(e)
    }
    const handleApellidos = (e: string)=>{
        setApellidos(e)
    }
    const handleCorreo = (e: string)=>{
        setCorreo(e)
    }
    const handleDireccion = (e: string)=>{
        setDireccion(e)
    }
    const handleContrasena = (e: string)=>{
        setContrasena(e)
    }
    const handleRolId = (e: string)=>{
        setRolId(e)
    }

    const registrarUsuario = () => {
        axios.post(`http://localhost:3001/usuarios`,{
            nombres: Nombres,
            apellidos: Apellidos,
            correo: Correo,
            contrasena: Contrasena,
            direccion: Direccion,
            rolid: RolId,
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

                            <h1>Nuevo Usuario</h1>
                            <Link to={"/usuarios"} className="btn btn-primary">Atrás | Usuarios</Link>
                            <hr />
                            <InputText hint="Nombres" id="nombre" type="text" handleInput={handleNombres}/>
                            <InputText hint="Apellidos" id="apellidos" type="text" handleInput={handleApellidos}/>
                            <InputText hint="Correo" id="correo" type="text" handleInput={handleCorreo}/>
                            <InputText hint="Contraseña" id="contrasena" type="text" handleInput={handleContrasena}/>
                            <InputText hint="Dirección" id="direccion" type="text" handleInput={handleDireccion}/>
                            <InputText hint="Rol ID" id="rol-id" type="textarea" handleInput={handleRolId}/>
                            <br />
                            <BotonPrincipal texto="Crear Evento" callBack={registrarUsuario}></BotonPrincipal>
                        </div>
                    </div>
                </div>
            </div>
    )

}