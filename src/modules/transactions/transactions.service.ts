import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find({
      relations: ['product'],
      order: { createdAt: 'DESC' },
    });
  }

  async create(transaction: Partial<Transaction>): Promise<Transaction> {
    const newTransaction = this.transactionsRepository.create(transaction);
    return this.transactionsRepository.save(newTransaction);
  }
}
