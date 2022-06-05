import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class Users{
    @PrimaryGeneratedColumn('increment')
    id: number;


    @Column()
    name:string;

    @Column()
    telefone:string;

    @Column()
    email:string;

    @Column()
    senha:string;

    @Column()
    ativo:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

