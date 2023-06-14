
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Roles extends Model {

    @Column
    nombre_permiso: string

    @Column
    llave_permiso: string

    @Column(DataType.JSON)
    permisos: JSON

}