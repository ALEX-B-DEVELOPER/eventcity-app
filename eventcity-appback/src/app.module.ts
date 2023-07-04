import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { EventosModule } from './eventos/eventos.module';
import { EntradasModule } from './entradas/entradas.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'eventcity-app',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule,
    RolesModule,
    AutenticacionModule,
    EventosModule,
    EntradasModule,
  ],
})
export class AppModule {}
