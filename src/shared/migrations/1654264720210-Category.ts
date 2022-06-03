import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Category1654264720210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "category",
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
