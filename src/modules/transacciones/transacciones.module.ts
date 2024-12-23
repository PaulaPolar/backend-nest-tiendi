import { Module } from '@nestjs/common';
import { InterfacesController } from './interfaces/interfaces.controller';

@Module({
  controllers: [InterfacesController]
})
export class TransaccionesModule {}
