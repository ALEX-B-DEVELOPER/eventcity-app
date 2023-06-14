import { Module } from '@nestjs/common';
import { AutenticacionController } from './autenticacion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from 'src/usuarios/modelos/Usuario';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  imports:[SequelizeModule.forFeature([Usuario])], 
  controllers: [AutenticacionController],
  providers: [UsuariosService]
})
export class AutenticacionModule {}
