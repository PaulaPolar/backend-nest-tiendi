import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from '../domain/producto.entity';
import { ProductoRepository } from '../domain/producto.repository.interface';

@Injectable()
export class ProductoRepositoryImpl implements ProductoRepository{
  constructor(
    @InjectRepository(Producto)
    private readonly repository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Producto> {
    return this.repository.findOne({ where: { id_producto: id } });
  }

  async create(producto: Producto): Promise<Producto> {
    return this.repository.save(producto);
  }

  async updateStock(id: number, cantidad: number): Promise<void> {
    await this.repository.update({ id_producto: id }, { stock: cantidad });
  }
}