import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth-dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('autenticacion')
export class AutenticacionController {
    constructor(private authService: UsuariosService) { }

    @Post("login")
    async login(@Body() authDto: AuthDto) : Promise<any> {
        return this.authService.queryLogin(authDto)
        
    }
}
