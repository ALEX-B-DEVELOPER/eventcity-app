import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from './modelos/Usuario';
import { CrearUsuarioDto } from './dto/crear-usuario-dto';
import { AuthDto } from 'src/autenticacion/dto/auth-dto';

var md5 = require('md5');
@Injectable()
export class UsuariosService {


    constructor(
        @InjectModel(Usuario)
        private readonly usuarioModel: typeof Usuario,
        private jwtService: JwtService) { }

    insert(dto: CrearUsuarioDto): Promise<Usuario> {

        return this.usuarioModel.create({
            nombres: dto.nombres,
            apellidos: dto.apellidos,
            correo: dto.correo,
            contrena: md5(dto.contrena),
            direccion: dto.direccion,
        })
    }

    select(): Promise<Usuario[]> {
        return this.usuarioModel.findAll()
    }

    async queryLogin(authDto: AuthDto) {
        const usuario = await this.usuarioModel.findOne({
            where: {
                correo: authDto.correo,
                contrena: md5(authDto.contrasena)
            }
        })

        if (usuario === undefined) {
            throw new UnauthorizedException();
        }
        const payload = { sub: usuario.nombres, correo: usuario.correo, rol: "ADMIN" };
        return {
            access_token: await this.jwtService.signAsync(payload),
            nombre: usuario.nombres
        };
    }


}
