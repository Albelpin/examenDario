import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1584098464728 implements MigrationInterface {
  name = 'CreateTables1584098464728';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "creationDate" datetime NOT NULL DEFAULT (datetime('now')), "modificationDate" datetime NOT NULL DEFAULT (datetime('now')), "username" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "role" integer NOT NULL DEFAULT (0))`,
      undefined,
    );

    await queryRunner.query(
      `CREATE TABLE "examen" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "version" integer NOT NULL DEFAULT (1), "creationDate" datetime NOT NULL DEFAULT (datetime('now')), "modificationDate" datetime NOT NULL DEFAULT (datetime('now')), "fecha" varchar(255), "nombre" varchar(255), "asignatura" varchar(255), "nota" varchar(255))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "examen"`, undefined);
    await queryRunner.query(`DROP TABLE "user"`, undefined);
  }
}
