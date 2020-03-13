import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';
import { IsDefined, IsDate, MaxLength, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class Examen extends BaseEntity {
  @ApiPropertyOptional()
  @IsDefined()
  @IsDate()
  @Type(() => Date)
  @Column('varchar', { length: 255, nullable: true })
  fecha?: Date;

  @ApiPropertyOptional()
  @IsDefined()
  @MaxLength(8)
  @Column('varchar', { length: 255, nullable: true })
  nombre?: string;

  @ApiPropertyOptional()
  @IsDefined()
  @MaxLength(4)
  @Column('varchar', { length: 255, nullable: true })
  asignatura?: string;

  @ApiPropertyOptional()
  @IsDefined()
  @Min(0)
  @Max(10)
  @Column('varchar', { length: 255, nullable: true })
  nota?: number;
}
