import { Module } from '@nestjs/common';
import { MunicipiosController } from './interfaces/municipios.controller';

@Module({
  controllers: [MunicipiosController]
})
export class MunicipiosModule {}
