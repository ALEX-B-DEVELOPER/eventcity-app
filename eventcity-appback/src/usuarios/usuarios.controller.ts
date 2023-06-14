import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario-dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private service: UsuariosService) { }

    @Post()
    crearUsuario(@Body() dto: CrearUsuarioDto) {
        return this.service.insert(dto)
    }

    @Get()
    todosLosUsuarios() {
        return this.service.select()
    }
}
