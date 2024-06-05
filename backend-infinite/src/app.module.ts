import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { BookModule } from './modules/book/book.module';
import { CategoryModule } from './modules/category/category.module';
import { CategoryBookModule } from './modules/categorybook/categorybook.module';
import { CityModule } from './modules/city/city.module';
import { CustomerModule } from './modules/customer/customer.module';
import { GenderModule } from './modules/gender/gender.module';
import { LoanModule } from './modules/loan/loan.module';
import { ReviewModule } from './modules/review/review.module';
import { RolModule } from './modules/rol/rol.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: '1234',
      database: 'infinity',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema:true
    }),
    AdministratorModule,
    BookModule,
    CategoryModule,
    CategoryBookModule,
    CityModule,
    CustomerModule,
    GenderModule,
    LoanModule,
    ReviewModule,
    RolModule,
    UserModule,
  ],
})
export class AppModule {}
