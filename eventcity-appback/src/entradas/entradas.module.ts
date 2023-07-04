import { Module } from '@nestjs/common';
import { EntradasController } from './entradas.controller';
import { EntradasService } from './entradas.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Entrada } from './modelos/entradas';

@Module({
  imports: [SequelizeModule.forFeature([Entrada])],
  controllers: [EntradasController],
  providers: [EntradasService]
})
export class EntradasModule {}
