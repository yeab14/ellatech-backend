import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Product } from './products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { AdjustProductDto } from './dto/adjust-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    private dataSource: DataSource, // for managing transactions
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  async adjustQuantity(adjustProductDto: AdjustProductDto): Promise<Product> {
    const { productId, adjustment } = adjustProductDto;

    return await this.dataSource.transaction(async manager => {
      const product = await manager.findOne(Product, { where: { id: productId } });

      if (!product) {
        throw new NotFoundException(`Product with id ${productId} not found`);
      }

      product.quantity += adjustment;
      if (product.quantity < 0) {
        throw new Error('Product quantity cannot be negative');
      }

      return await manager.save(product);
    });
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productsRepository.findOneBy({ id });
  }
}
