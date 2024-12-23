import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column()
  nombre_producto: string;

  @Column('int')
  stock: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ nullable: true })
  url_imagen: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;
}