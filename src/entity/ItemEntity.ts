import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {ParameterEntity} from "./ParameterEntity";
import {ParameterValueEntity} from "./ParameterValueEntity";

@Entity()
export class ItemEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => ParameterEntity, parameter => parameter.item)
    parameters: ParameterEntity[];

}
