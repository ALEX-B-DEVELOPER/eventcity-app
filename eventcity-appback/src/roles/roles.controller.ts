import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CrearRolDto } from './dto/create.rol.dto';

@Controller('roles')
export class RolesController {
    constructor(private service: RolesService){}

    @Post()
    insertRol(@Body() rolesDto: CrearRolDto){
           return this.service.insert(rolesDto)
    }

    @Get('permisos')
    getRoles(){
       return this.service.getPermisos() 
    }
}
