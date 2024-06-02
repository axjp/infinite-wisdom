import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryBook } from '../../database/entities/categorybook.entity';

@Injectable()
export class CategoryBookService {
  constructor(
    @InjectRepository(CategoryBook)
    private categoryBookRepository: Repository<CategoryBook>,
  ) {}

  findAll(): Promise<CategoryBook[]> {
    return this.categoryBookRepository.find();
  }

  findOne(id: number): Promise<CategoryBook> {
    return this.categoryBookRepository.findOne({ where: { idcategorybook: id } });
  }

  create(categoryBook: CategoryBook): Promise<CategoryBook> {
    return this.categoryBookRepository.save(categoryBook);
  }

  async update(id: number, categoryBook: CategoryBook): Promise<CategoryBook> {
    await this.categoryBookRepository.update(id, categoryBook);
    return this.categoryBookRepository.findOne({ where: { idcategorybook: id } });
  }

  async remove(id: number): Promise<void> {
    await this.categoryBookRepository.delete(id);
  }
}
