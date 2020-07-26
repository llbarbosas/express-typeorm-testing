import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Service {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    age: string
}
