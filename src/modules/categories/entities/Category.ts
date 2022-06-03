import {Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn} from "typeorm";

@Entity('category')
export default class Category{
    @ObjectIdColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    ativo:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

