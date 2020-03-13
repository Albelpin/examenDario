import { MigrationInterface, QueryRunner } from 'typeorm';
import { roles } from '../app/core/auth/model/roles.enum';
import { hash, genSalt } from 'bcrypt';

export class InsertData1584101086256 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`INSERT INTO EXAMEN(id, nombre, asignatura, nota) VALUES(1, 'Examen1', 'AATT', 7);`);
    await queryRunner.query(`INSERT INTO EXAMEN(id, nombre, asignatura, nota) VALUES(2, 'Examen2', 'DSP', 8);`);
    await queryRunner.query(`INSERT INTO EXAMEN(id, nombre, asignatura, nota) VALUES(3, 'Examen3', 'SEC', 9);`);

    await queryRunner.query(`INSERT INTO USER(id, username, password, role) VALUES(?, ?, ?, ?);`, [
      1,
      'user',
      await hash('password', await genSalt(12)),
      roles.USER,
    ]);
    await queryRunner.query(`INSERT INTO USER(id, username, password, role) VALUES(?, ?, ?, ?);`, [
      2,
      'admin',
      await hash('admin', await genSalt(12)),
      roles.ADMIN,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM EXAMEN`);
    await queryRunner.query(`DELETE FROM USER`);
  }
}
