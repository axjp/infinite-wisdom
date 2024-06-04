import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Book } from './entities/book.entity';
import { Category } from './entities/category.entity';
import { CategoryBook } from './entities/categorybook.entity';
import { City } from './entities/city.entity';
import { Customer } from './entities/customer.entity';
import { Gender } from './entities/gender.entity';
import { Loan } from './entities/loan.entity';
import { Review } from './entities/review.entity';
import { Rol } from './entities/rol.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          Book,
          Category,
          CategoryBook,
          City,
          Customer,
          Gender,
          Loan,
          Review,
          Rol,
          User,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
