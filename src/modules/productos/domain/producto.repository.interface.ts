import { Producto } from "./producto.entity";

export interface ProductoRepository {
    findAll(): Promise<Producto[]>;
    findById(id: number): Promise<Producto>;
    create(producto: Producto): Promise<Producto>;
    updateStock(id: number, cantidad: number): Promise<void>;
  }