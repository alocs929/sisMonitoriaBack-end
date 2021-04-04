import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createConnections1617420264039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'connections',
          columns:[
            {
              name:'id',
              type:'uuid',
              isPrimary: true,
            },
            {
              name: 'counter',
              type: 'integer',
              default: 0,
            },
          ],
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('connections')
    }

}
