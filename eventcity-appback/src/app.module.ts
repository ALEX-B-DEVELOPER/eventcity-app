import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { UsuariosModule } from './usuarios/usuarios.module';

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
    UsersModule,
    UsuariosModule,
  ],
})
export class AppModule {}
