import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Evento } from './modelos/eventos';
import { EventoDto } from './dto/evento-dto';
import { Usuario } from 'src/usuarios/modelos/Usuario';

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

    selectById(id: number): Promise<Evento> {
        return this.eventoModel.findOne({
            where: {
                id: id,
            }
        });
    }
    
}
