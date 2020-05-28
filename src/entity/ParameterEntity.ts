import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {ItemEntity} from "./ItemEntity";
import {ParameterValueEntity} from "./ParameterValueEntity";

@Entity()
export class ParameterEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => ItemEntity, item => item.parameters)
    item: ItemEntity;

    @OneToOne(type => ParameterValueEntity)
    @JoinColumn()
    value: ParameterValueEntity;

    @OneToMany(type => ParameterValueEntity, parameter => parameter.parameter)
    values: ParameterValueEntity[];
}
