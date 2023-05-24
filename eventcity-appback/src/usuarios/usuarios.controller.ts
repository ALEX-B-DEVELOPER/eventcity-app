import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarioDto } from './dto/crear-usuario-dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private service : UsuariosService){ }

    @Post()
    crearUsuario(@Body() dto: CrearUsuarioDto){
        return this.service.insert(dto)
    }

    @Get("miaw")
    renderHome(){
        return "<img src='https://live.staticflickr.com/2850/9397808994_1354b9b6f7.jpg'/>";
    }

    @Get()
    todosLosUsuarios(){
        return this.service.select()
    }
}
