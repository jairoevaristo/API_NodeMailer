import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableUsers1606426240117 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isGenerated: true,
          isPrimary: true,
          isUnique: true,
        },

        {
          name: 'name',
          type: 'varchar',
        },

        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },

        {
          name: 'password',
          type: 'varchar',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
