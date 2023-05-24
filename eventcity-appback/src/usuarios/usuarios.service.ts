import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './modelos/Usuario';
import { CrearUsuarioDto } from './dto/crear-usuario-dto';

@Injectable()
export class UsuariosService {

    constructor(@InjectModel(Usuario) 
    private readonly usuarioModel: typeof Usuario,
    ) { }

    insert(dto: CrearUsuarioDto): Promise<Usuario> {
        return this.usuarioModel.create({
            nombres: dto.nombres,
            apellidos: dto.apellidos,
            correo: dto.correo,
            contrasena: dto.contrasena,
        })
 
    }

    select():Promise<Usuario[]>{
        return this.usuarioModel.findAll();
    }
}
