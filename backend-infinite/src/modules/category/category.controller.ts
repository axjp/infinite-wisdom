import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '../../database/entities/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Post()
  create(@Body() category: Category) {
    return this.categoryService.create(category);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() category: Category) {
    return this.categoryService.update(+id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
