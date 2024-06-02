import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrator } from '../../database/entities/administrator.entity';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private administratorRepository: Repository<Administrator>,
  ) {}

  findAll(): Promise<Administrator[]> {
    return this.administratorRepository.find();
  }

  findOne(id: number): Promise<Administrator> {
    return this.administratorRepository.findOne({ where: { idadministrator: id } });
  }

  create(administrator: Administrator): Promise<Administrator> {
    return this.administratorRepository.save(administrator);
  }

  async update(id: number, administrator: Administrator): Promise<Administrator> {
    await this.administratorRepository.update(id, administrator);
    return this.administratorRepository.findOne({ where: { idadministrator: id } });
  }

  async remove(id: number): Promise<void> {
    await this.administratorRepository.delete(id);
  }
}
