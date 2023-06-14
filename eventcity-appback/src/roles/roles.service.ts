import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './modelos/roles';
import { CrearRolDto } from './dto/create.rol.dto';
import { Permisos } from './permisos/permisos';

@Injectable()
export class RolesService {

    constructor(
        @InjectModel(Roles)
        private readonly rolesModel: typeof Roles) { }


    insert(dto: CrearRolDto): Promise<Roles> {

        return this.rolesModel.create({
            nombre_permiso: dto.nombre,
            llave_permiso: dto.llave,
            permisos: dto.permisos
        })
    }

    getPermisos(): any {
        return Permisos
    }
}
