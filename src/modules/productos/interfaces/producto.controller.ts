import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ProductoRepositoryImpl } from '../infrastructure/producto.repository';
import { CreateProductoUseCase } from '../application/use-cases/create-producto.use-case';
import { Producto } from '../domain/producto.entity';
import { UpdateStockUseCase } from '../application/use-cases/update-stock.use-case';

@Controller('productos')
export class ProductoController {
  constructor(
    private readonly productoRepository: ProductoRepositoryImpl,
    private readonly createProductoUseCase: CreateProductoUseCase,
    private readonly updateStockUseCase: UpdateStockUseCase,
  ) {}

  @Get('/obtenerProductos')
  async getAll() {
    return this.productoRepository.findAll();
  }

  @Post('/crearProducto')
  async create(@Body() producto: Producto) {
    return this.createProductoUseCase.execute(producto);
  }

  @Patch('/actualizarStock/:id')
  async updateStock(
    @Param('id') id: number,
    @Body('cantidad') cantidad: number,
  ) {
    await this.updateStockUseCase.execute(id, cantidad);
    return { message: `Stock del producto con ID ${id} actualizado` };
  }
  
}
