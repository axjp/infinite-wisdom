import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity'; 

@Injectable()
export class CustomerService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll(): Promise<CustomerEntity[]> {
    return this.customerRepository.find();
  }
}