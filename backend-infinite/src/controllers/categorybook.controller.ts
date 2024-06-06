import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoryBookService } from '../services/categorybook.service';
import { CategoryBook } from '../entities/categorybook.entity';

@Controller('categorybooks')
export class CategoryBookController {
  constructor(private readonly categoryBookService: CategoryBookService) {}

  @Get()
  findAll() {
    return this.categoryBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryBookService.findOne(+id);
  }

  @Post()
  create(@Body() categoryBook: CategoryBook) {
    return this.categoryBookService.create(categoryBook);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() categoryBook: CategoryBook) {
    return this.categoryBookService.update(+id, categoryBook);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryBookService.remove(+id);
  }
}
