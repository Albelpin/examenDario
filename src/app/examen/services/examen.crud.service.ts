import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Examen } from '../model/entities/examen.entity';

@Injectable()
export class ExamenCrudService extends TypeOrmCrudService<Examen> {
  constructor(@InjectRepository(Examen) repo: Repository<Examen>) {
    super(repo);
  }
}
