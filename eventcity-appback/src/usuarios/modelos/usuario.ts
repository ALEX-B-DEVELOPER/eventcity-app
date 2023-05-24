import { Column, Model, Table } from "sequelize-typescript"

@Table
export class Usuario extends Model{
    @Column
    nombres: string
    @Column
    apellidos: string
    @Column
    correo: string
    @Column
    contrasena: string
}