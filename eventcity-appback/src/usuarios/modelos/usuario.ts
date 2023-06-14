import { Column, Default, Model, Table } from "sequelize-typescript"

@Table
export class Usuario extends Model {
    @Column
    nombres: string
    @Column
    apellidos: string
    @Column
    correo: string
    @Column
    contrena: string
    @Column
    direccion: string
    @Default(1)
    @Column
    rolId: number
}