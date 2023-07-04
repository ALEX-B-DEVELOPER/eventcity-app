import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EntradasService } from './entradas.service';
import { EntradaDto } from './dto/entrada-dto';

@Controller('entradas')
export class EntradasController {
    constructor(private service: EntradasService){}

    @Get()
    devolverTodasLasEntradas(){
        return this.service.listadoEntradas()
    }

    @Post()
    insertarEntrada(@Body() dto: EntradaDto){
        return this.service.insertarEntrada(dto)
    }

    @Get(':id')
    entradaById(@Param('id', ParseIntPipe) id: number) {
        return this.service.selectById(id)
    }

}

   