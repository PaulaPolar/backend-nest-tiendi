import { Module } from '@nestjs/common';
import { DepartamentosController } from './interfaces/departamentos.controller';

@Module({
    controllers: [DepartamentosController]
})
export class DepartamentosModule {}
