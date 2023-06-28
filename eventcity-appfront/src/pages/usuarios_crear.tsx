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
    const [Telefono, setTelefono] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Contrasena, setContrasena] = useState('')
    const [RolId, setRolId] = useState('')

    const [Organizacion, setOrganizacion] = useState('')
    const [Website, setWebsite] = useState('')
    const [Imagen, setImagen] = useState('')
    const [Descripcion, setDescripcion] = useState('')

    const handleNombres = (e: string)=>{
        setNombres(e)
    }
    const handleApellidos = (e: string)=>{
        setApellidos(e)
    }
    const handleTelefono = (e: string)=>{
        setTelefono(e)
    }
    const handleCorreo = (e: string)=>{
        setCorreo(e)
    }
    const handleContrasena = (e: string)=>{
        setContrasena(e)
    }
    const handleRolId = (e: string)=>{
        setRolId(e)
    }

    const handleOrganizacion = (e: string)=>{
        setOrganizacion(e)
    }
    const handleWebsite = (e: string)=>{
        setWebsite(e)
    }
    const handleImagen = (e: string)=>{
        setImagen(e)
    }
    const handleDescripcion = (e: string)=>{
        setDescripcion(e)
    }

    const registrarUsuario = () => {
        axios.post(`http://localhost:3001/usuarios`,{
            nombres: Nombres,
            apellidos: Apellidos,
            correo: Correo,
            contrena: Contrasena,
            telefono: Telefono,
            rolid: RolId,

            organizacion: Organizacion,
            website: Website,
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

                            <h1>Nuevo Usuario</h1>
                            <Link to={"/usuarios"} className="btn btn-primary">Atrás | Usuarios</Link>
                            <hr />
                            <InputText hint="Nombres" id="nombre" type="text" handleInput={handleNombres}/>
                            <InputText hint="Apellidos" id="apellidos" type="text" handleInput={handleApellidos}/>
                            <InputText hint="Teléfono" id="telefono" type="text" handleInput={handleTelefono}/>
                            <InputText hint="Correo" id="correo" type="text" handleInput={handleCorreo}/>
                            <InputText hint="Contraseña" id="contrasena" type="text" handleInput={handleContrasena}/>
                            <InputText hint="Rol ID" id="rol-id" type="text" handleInput={handleRolId}/>
                            <hr />
                            <InputText hint="Organización" id="organizacion" type="text" handleInput={handleOrganizacion}/>
                            <InputText hint="Website" id="website" type="text" handleInput={handleWebsite}/>
                            <InputText hint="Imagen" id="imagen" type="text" handleInput={handleImagen}/>
                            <InputText hint="Descripción" id="descripcion" type="text" handleInput={handleDescripcion}/>
                            <br />
                            <BotonPrincipal texto="Crear Usuario" callBack={registrarUsuario}></BotonPrincipal>
                        </div>
                    </div>
                </div>
            </div>
    )

}