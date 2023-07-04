import { Injectable } from '@nestjs/common';
import { Entrada } from './modelos/entradas';
import { InjectModel } from '@nestjs/sequelize';
import { EntradaDto} from './dto/entrada-dto';

@Injectable()
export class EntradasService {

    constructor(
        @InjectModel(Entrada)
        private readonly entradaModel: typeof Entrada,
    ){}

    insertarEntrada(dto: EntradaDto): Promise<Entrada>{
        return this.entradaModel.create({
            eventoid: dto.eventoId,
            nombre: dto.nombreTicket,
            precio: dto.precio,
            cantidad: dto.cantidadTickets,
            porcentajeDescuento: dto.porcentajeDescuento
        })
    }

    listadoEntradas(): Promise<Entrada[]>{
        return this.entradaModel.findAll()
    }

    selectById(id: number): Promise<Entrada> {
        return this.entradaModel.findOne({
            where: {
                id: id,
            }
        });
    }

}
