import { Injectable } from '@nestjs/common';
import { Producto } from '../../domain/producto.entity';
import { ProductoRepositoryImpl } from '../../infrastructure/producto.repository';

@Injectable()
export class CreateProductoUseCase {
  constructor(private readonly productoRepository: ProductoRepositoryImpl) {}

  async execute(producto: Producto): Promise<Producto> {
    return this.productoRepository.create(producto);
  }
}