import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1646699151806 implements MigrationInterface {
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
                    name: "telefone",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "senha",
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
        await queryRunner.dropTable('users')
    }

}
