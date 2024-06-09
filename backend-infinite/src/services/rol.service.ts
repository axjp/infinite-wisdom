import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  findAll(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  findOne(id: number): Promise<Rol> {
    return this.rolRepository.findOne({ where: { idrol: id } });
  }

  create(rol: Rol): Promise<Rol> {
    return this.rolRepository.save(rol);
  }

  async update(id: number, rol: Rol): Promise<Rol> {
    await this.rolRepository.update(id, rol);
    return this.rolRepository.findOne({ where: { idrol: id } });
  }

  async remove(id: number): Promise<void> {
    await this.rolRepository.delete(id);
  }
}
