import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './domain/producto.entity';
import { ProductoRepositoryImpl } from './infrastructure/producto.repository';
import { ProductoController } from './interfaces/producto.controller';
import { CreateProductoUseCase } from './application/use-cases/create-producto.use-case';
import { UpdateStockUseCase } from './application/use-cases/update-stock.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])], // Registra la entidad
  controllers: [ProductoController],
  providers: [
    ProductoRepositoryImpl,        // Registra el repositorio como proveedor
    CreateProductoUseCase,      // Casos de uso
    UpdateStockUseCase,         // Casos de uso
  ],
  exports: [ProductoRepositoryImpl], // Exporta el repositorio si otro módulo lo necesita
})
export class ProductosModule {}

