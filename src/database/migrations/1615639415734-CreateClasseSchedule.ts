import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClasseSchedule1615639415734
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classeSchedule',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'classe_id',
            type: 'uuid',
          },
          {
            name: 'weekday',
            type: 'integer',
          },
          {
            name: 'time_from',
            type: 'integer',
          },
          {
            name: 'time_to',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'FKClasse',
            referencedTableName: 'classes',
            referencedColumnNames: ['id'],
            columnNames: ['classe_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classeSchedule');
  }
}
