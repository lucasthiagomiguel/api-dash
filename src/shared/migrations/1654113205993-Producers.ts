import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Producers1654113205993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "name_fazenda",
                    type: "varchar",
                },
                {
                    name: "cpf_cnpj",
                    type: "varchar",
                },
                {
                    name: "estado",
                    type: "varchar",
                },
                {
                    name: "hectares",
                    type: "int",
                },
                {
                    name: "area_agricultavel",
                    type: "int",
                },
                {
                    name: "area_vegetacao",
                    type: "int",
                },
                {
                    name: "plantacao",
                    type: "varchar",
                },
                {
                    name: "total_fazenda",
                    type: "int",
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
