import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Customer } from './entities/customer.entity';
import { Administrator } from './entities/administrator.entity';
import { Gender } from './entities/gender.entity';
import { City } from './entities/city.entity';
import { Book } from './entities/book.entity';
import { Download } from './entities/download.entity';
import { Category } from './entities/category.entity';
import { CategoryBook } from './entities/categorybook.entity';
import { Loan } from './entities/loan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yourpassword',
      database: 'yourdatabase',
      entities: [
        User,
        Role,
        Customer,
        Administrator,
        Gender,
        City,
        Book,
        Download,
        Category,
        CategoryBook,
        Loan
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      Role,
      Customer,
      Administrator,
      Gender,
      City,
      Book,
      Download,
      Category,
      CategoryBook,
      Loan
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
