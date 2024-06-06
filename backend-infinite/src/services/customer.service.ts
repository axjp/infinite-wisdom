import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOne({ where: { idcustomer: id } });
  }

  create(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async update(id: number, customer: Customer): Promise<Customer> {
    await this.customerRepository.update(id, customer);
    return this.customerRepository.findOne({ where: { idcustomer: id } });
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
