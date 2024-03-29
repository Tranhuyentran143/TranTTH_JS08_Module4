import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//decorator
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;  

    @Column()
    task_name: string; 

    @Column()
    status: boolean;

}