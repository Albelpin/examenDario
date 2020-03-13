import { Module } from '@nestjs/common';
import { Examen } from './model/entities/examen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenCrudService } from './services/examen.crud.service';
import { ExamenCrudController } from './controllers/examen.crud.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Examen])],
  providers: [ExamenCrudService],
  controllers: [ExamenCrudController],
})
export class ExamenModule {}
