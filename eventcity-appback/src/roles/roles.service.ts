import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './modelos/roles';
import { CrearRolDto } from './dto/create.rol.dto';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Roles) 
        private readonly rolesModule: typeof Roles){}

    insert (dto: CrearRolDto): Promise<Roles>{
        return this.rolesModule.create({
            nombre_permiso: dto.nombre,
            llave_permiso: dto.llave,
            permisos: dto.permisos
        })
        
    }

    getPermisos():any{
        return[
            {
                "nombre_permiso": "Crear usuario",
                "llave_permiso": "ADD_USER"
            },
            {
                "nombre_permiso": "eliminar usuario",
                "llave_permiso": "DELETE_USER"
            }
        ]
    }
}
