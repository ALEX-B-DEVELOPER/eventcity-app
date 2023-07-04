import { CrearUsuarioDto } from "./crear-usuario-dto";

export class ActualizarUsuarioDto extends CrearUsuarioDto {
    nombres: string
    apellidos: string
    telefono: string
    correo: string
    contrena: string

    rolId: number
    organizacion: string
    website: string
    imagen: string
    descripcion: string
}