import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../../database/entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  findOne(id: number): Promise<City> {
    return this.cityRepository.findOne({ where: { idcity: id } });
  }

  create(city: City): Promise<City> {
    return this.cityRepository.save(city);
  }

  async update(id: number, city: City): Promise<City> {
    await this.cityRepository.update(id, city);
    return this.cityRepository.findOne({ where: { idcity: id } });
  }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}
