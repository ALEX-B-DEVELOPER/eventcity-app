import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { EventosService } from './eventos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Evento } from './modelos/eventos';

@Module({
  imports: [SequelizeModule.forFeature([Evento])],
  controllers: [EventosController],
  providers: [EventosService]
})
export class EventosModule {}
