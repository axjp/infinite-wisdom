import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryBookService } from '../../services/categorybook.service';
import { CategoryBookController } from '../../controllers/categorybook.controller';
import { CategoryBook } from '../../entities/categorybook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryBook])],
  providers: [CategoryBookService],
  controllers: [CategoryBookController],
})
export class CategoryBookModule {}
