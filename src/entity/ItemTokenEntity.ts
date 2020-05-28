import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {ItemEntity} from "./ItemEntity";

@Entity()
export class ItemTokenEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @OneToOne(type => ItemEntity)
    @JoinColumn()
    item: ItemEntity;

}
