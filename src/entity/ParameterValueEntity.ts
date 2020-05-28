import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {ItemEntity} from "./ItemEntity";
import {ParameterEntity} from "./ParameterEntity";

@Entity()
export class ParameterValueEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @ManyToOne(type => ParameterEntity, parameter => parameter.values)
    parameter: ParameterEntity;
}
