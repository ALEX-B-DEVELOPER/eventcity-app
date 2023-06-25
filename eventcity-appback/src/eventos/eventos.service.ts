import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Evento } from './modelos/eventos';
import { EventoDto } from './dto/evento-dto';

@Injectable()
export class EventosService {

    constructor(
        @InjectModel(Evento)
        private readonly eventoModel: typeof Evento,
    ){}

    insertarProducto(dto: EventoDto): Promise<Evento>{
        return this.eventoModel.create({
            nombre: dto.nombre,
            inicia: dto.inicia,
            finaliza: dto.finaliza,
            lugar: dto.lugar,
            mapaLugar: dto.mapaLugar,
            audiencia: dto.audiencia,
            categoria: dto.categoria, 
            imagen: dto.imagen,
            descripcion: dto.descripcion 
        })
    }

    listadoEventos(): Promise<Evento[]>{
        return this.eventoModel.findAll()
    }
}
