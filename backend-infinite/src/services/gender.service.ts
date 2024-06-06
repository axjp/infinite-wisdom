import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gender } from '../entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private genderRepository: Repository<Gender>,
  ) {}

  findAll(): Promise<Gender[]> {
    return this.genderRepository.find();
  }

  findOne(id: number): Promise<Gender> {
    return this.genderRepository.findOne({ where: { idgender: id } });
  }

  create(gender: Gender): Promise<Gender> {
    return this.genderRepository.save(gender);
  }

  async update(id: number, gender: Gender): Promise<Gender> {
    await this.genderRepository.update(id, gender);
    return this.genderRepository.findOne({ where: { idgender: id } });
  }

  async remove(id: number): Promise<void> {
    await this.genderRepository.delete(id);
  }
}
