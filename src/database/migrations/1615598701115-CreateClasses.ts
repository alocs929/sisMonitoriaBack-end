import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClasses1615598701115 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'monitor_id',
            type: 'uuid',
          },
          {
            name: 'subject',
            type: 'varchar',
          },
          {
            name: 'cost',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'FKMonitor',
            referencedTableName: 'monitor',
            referencedColumnNames: ['id'],
            columnNames: ['monitor_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classes');
  }
}
