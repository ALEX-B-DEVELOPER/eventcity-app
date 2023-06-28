import { Column, Default, Model, Table } from "sequelize-typescript"

@Table
export class Usuario extends Model {
    @Column
    nombres: string
    @Column
    apellidos: string
    @Column
    telefono: string
    @Column
    correo: string
    @Column
    contrena: string
    @Default(1)
    @Column
    rolId: number

    @Column
    organizacion: string
    @Column
    website: string
    @Column
    imagen: string
    @Column
    descripcion: string

    @Default(true)
    @Column    
    estado: boolean
}