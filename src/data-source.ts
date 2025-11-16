import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';
import { User } from './modules/users/users.entity';
import { Product } from './modules/products/products.entity';
import { Transaction } from './modules/transactions/transactions.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +(process.env.DATABASE_PORT ?? 5432),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Product, Transaction],
  migrations: ['dist/migrations/*.{js,ts}'],
  synchronize: false,
});
