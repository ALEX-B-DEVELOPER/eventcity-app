import { Column, Default, Model, Table } from "sequelize-typescript";

@Table
export class Entrada extends Model{

    @Column
    eventoId: number
    @Column
    nombreTicket: string
    @Column
    precio: number
    @Column
    cantidadTickets: number
    @Default(0)
    @Column
    porcentajeDescuento: number
    
}