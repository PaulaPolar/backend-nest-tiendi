import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductoRepositoryImpl } from '../../infrastructure/producto.repository';

@Injectable()
export class UpdateStockUseCase {
  constructor(private readonly productoRepository: ProductoRepositoryImpl) {}

  async execute(id: number, cantidad: number): Promise<void> {
    // Buscar el producto
    const producto = await this.productoRepository.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    // Actualizar el stock
    const nuevoStock = producto.stock + cantidad; // Suma o resta según la cantidad
    if (nuevoStock < 0) {
      throw new Error('El stock no puede ser negativo');
    }

    await this.productoRepository.updateStock(id, nuevoStock);
  }
}
