import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryBookService } from './categorybook.service';
import { CategoryBookController } from './categorybook.controller';
import { CategoryBook } from '../../database/entities/categorybook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryBook])],
  providers: [CategoryBookService],
  controllers: [CategoryBookController],
})
export class CategoryBookModule {}
