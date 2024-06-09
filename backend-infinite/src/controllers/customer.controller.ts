import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../entities/customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Post()
  create(@Body() customer: Customer) {
    return this.customerService.create(customer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customer: Customer) {
    return this.customerService.update(+id, customer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
