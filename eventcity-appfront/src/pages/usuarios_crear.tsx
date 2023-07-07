import { useState } from "react";
import axios from "axios";
import '../app/componentes/contenedores/contenedor-admin-panel/contenedor-admin-panel.css';
import BotonPrincipal from "@/app/componentes/formularios/boton_principal";
import InputText from "@/app/componentes/formularios/input_texto";
import AdminMenu from "@/app/componentes/contenedores/contenedor-admin-sidebar/contenedor-admin-sidebar";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


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

        Swal.fire(
            'Nuevo Usuario',
            'Usuario registrado exitosamente',
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

                            <h1>Nuevo Usuario</h1>
                            <Link to={"/usuarios"} className="btn btn-primary">Atrás | Usuarios</Link>
                            <hr />
                            <form>
                            <div className="form-group row">
                                <label className="col-sm-3" >NOMBRES</label>
                                <div className="col-sm-9">
                                <InputText hint="Nombres" id="nombre" type="text" handleInput={handleNombres}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >APELLIDOS</label>
                                <div className="col-sm-9">
                                <InputText hint="Apellidos" id="apellidos" type="text" handleInput={handleApellidos}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >TELÉFONO</label>
                                <div className="col-sm-9">
                                <InputText hint="Teléfono" id="telefono" type="text" handleInput={handleTelefono}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >CORREO</label>
                                <div className="col-sm-9">
                                <InputText hint="Correo" id="correo" type="text" handleInput={handleCorreo}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >CONTRASEÑA</label>
                                <div className="col-sm-9">
                                <InputText hint="Contraseña" id="contrasena" type="text" handleInput={handleContrasena}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >ROL DE USUARIO</label>
                                <div className="col-sm-9">
                                <InputText hint="Rol ID" id="rol-id" type="text" handleInput={handleRolId}/>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <label className="col-sm-3" >ORGANIZACIÓN</label>
                                <div className="col-sm-9">
                                <InputText hint="Organización" id="organizacion" type="text" handleInput={handleOrganizacion}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >WEBSITE</label>
                                <div className="col-sm-9">
                                <InputText hint="Website" id="website" type="text" handleInput={handleWebsite}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >IMAGEN</label>
                                <div className="col-sm-9">
                                <InputText hint="Imagen" id="imagen" type="text" handleInput={handleImagen}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3" >DESCRIPCION</label>
                                <div className="col-sm-9">
                                <InputText hint="Descripción" id="descripcion" type="text" handleInput={handleDescripcion}/>
                                </div>
                            </div>
                            <br />
                            <BotonPrincipal texto="Crear Usuario" callBack={registrarUsuario}></BotonPrincipal>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )

}