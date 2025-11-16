import { DataSource } from 'typeorm';
import { User } from './modules/users/users.entity';
import { Product } from './modules/products/products.entity';
import { Transaction } from './modules/transactions/transactions.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'ellatech-postgres', 
  port: +(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'ellatech',
  entities: [User, Product, Transaction],
  migrations: ['src/migrations/*.{ts,js}'],
  synchronize: false,
});
