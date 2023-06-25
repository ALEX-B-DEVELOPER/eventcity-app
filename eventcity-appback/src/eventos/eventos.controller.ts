import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventoDto } from './dto/evento-dto';

@Controller('eventos')
export class EventosController {

constructor(private service: EventosService){}

    @Get()
    devolverTodosLosEventos(){
        return this.service.listadoEventos()
    }

    @Post()
    insertarEvento(@Body() dto: EventoDto){
        return this.service.insertarProducto(dto)
    }
}
