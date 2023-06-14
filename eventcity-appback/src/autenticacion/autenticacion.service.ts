import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from 'src/usuarios/modelos/Usuario';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AutenticacionService {


    constructor(
        @InjectModel(Usuario)
        private readonly usuarioModel: typeof Usuario) { }



    
}
