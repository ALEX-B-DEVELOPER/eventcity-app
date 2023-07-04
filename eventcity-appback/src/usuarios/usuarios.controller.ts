import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario-dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario-dto';

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

    @Get(':id')
    usuarioById(@Param('id', ParseIntPipe) id: number) {
        return this.service.selectById(id)
    }

    @Patch(':id')
    actualizarUsuario(@Param('id', ParseIntPipe)id: number, @Body() dto: ActualizarUsuarioDto){
        return this.service.update(id, dto)
    }
    
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }
}
