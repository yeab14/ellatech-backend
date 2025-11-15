import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Product } from '../products/products.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { nullable: false })
  user: User;

  @ManyToOne(() => Product, { nullable: false })
  product: Product;

  @Column('int')
  quantityChanged: number; 
  @CreateDateColumn()
  createdAt: Date;
}
