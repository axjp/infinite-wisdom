import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from '../../services/book.service';
import { BookController } from '../../controllers/book.controller';
import { Book } from '../../entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
