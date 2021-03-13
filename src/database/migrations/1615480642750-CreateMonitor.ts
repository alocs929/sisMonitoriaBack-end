import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMonitor1615480642750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
          name : "monitor",
          columns: [
            {
              name : "id",
              type : "uuid",
              isPrimary : true
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "avatar",
              type: "varchar"
            },
            {
              name: "whatsapp",
              type: "varchar"
            },
            {
              name: "bio",
              type: "varchar"
            }
          ]
        })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("monitor");
    }

}
