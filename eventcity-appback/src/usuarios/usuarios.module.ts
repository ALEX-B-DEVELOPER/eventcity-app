import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './modelos/Usuario';

@Module({
  imports: [SequelizeModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
