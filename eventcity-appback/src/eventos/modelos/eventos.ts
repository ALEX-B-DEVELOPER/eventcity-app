import { Column, Default, Model, Table } from "sequelize-typescript";
import { Col } from "sequelize/types/utils";

@Table
export class Evento extends Model{

    @Column
    nombre: string
    @Column
    inicia: string
    @Column
    finaliza: string
    @Column
    lugar: string
    @Column
    mapaLugar: string
    @Column
    audiencia: string 
    @Column
    categoria: string 
    @Column
    imagen: string
    @Column
    descripcion: string 
    @Default(false)
    @Column    
    gratis: boolean

    @Default(true)
    @Column    
    estado: boolean

}