import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from '../../services/customer.service';
import { CustomerController } from '../../controllers/customer.controller';
import { Customer } from '../../entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
