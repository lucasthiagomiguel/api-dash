import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Producers1654113205993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "varchar",
                },
                {
                    name: "variety",
                    type: "varchar",
                },
                {
                    name: "topSellers",
                    type: "boolean",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "category",
                    type: "boolean",
                },
                {
                    name: "more18",
                    type: "boolean",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "ativo",
                    type: "int",
                },
                
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
