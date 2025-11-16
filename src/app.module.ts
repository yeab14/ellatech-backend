import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port:  5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'ellatech',
      autoLoadEntities: true,
      synchronize: false, 
    }),
    UsersModule,
    ProductsModule,
    TransactionsModule,
  ],
})
export class AppModule {}
