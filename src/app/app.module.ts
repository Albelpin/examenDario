import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ExamenModule } from './examen/examen.module';

@Module({
  imports: [CoreModule, ExamenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
