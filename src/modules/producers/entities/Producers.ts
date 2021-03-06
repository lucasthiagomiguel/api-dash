import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('producers')
export default class Producers{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name:string;

    @Column()
    name_fazenda:string;

    @Column()
    cpf_cnpj:string;

    @Column()
    estado:string;

    @Column()
    hectares:number;

    @Column()
    area_agricultavel:number;

    @Column()
    area_vegetacao:number;

    @Column()
    plantacao:string;
    
    @Column()
    total_fazenda:number;

    @Column()
    ativo:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

