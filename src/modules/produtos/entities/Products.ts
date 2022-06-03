import {Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn} from "typeorm";

@Entity('products')
export default class Products{
    @ObjectIdColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    price:string;

    @Column()
    variety:string;

    @Column()
    topSellers:string;

    @Column()
    image:string;

    @Column()
    category:boolean;

    @Column()
    more18:boolean;

    @Column()
    description:string;

    @Column()
    ativo:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

