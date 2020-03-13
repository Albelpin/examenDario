import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudType } from '@devon4node/common/serializer';
import { Examen } from '../model/entities/examen.entity';
import { ExamenCrudService } from '../services/examen.crud.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('examen')
@Crud({
  model: {
    type: Examen,
  },
})
@CrudType(Examen)
@Controller('examen/notas')
export class ExamenCrudController {
  constructor(public service: ExamenCrudService) {}
}
