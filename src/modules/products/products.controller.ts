import { Controller, Post, Body, Put, Param, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AdjustProductDto } from './dto/adjust-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put('adjust')
  async adjustQuantity(@Body() adjustProductDto: AdjustProductDto) {
    return this.productsService.adjustQuantity(adjustProductDto);
  }

  @Get('status/:productId')
  async getStatus(@Param('productId') productId: string) {
    return this.productsService.findOne(productId);
  }
}
