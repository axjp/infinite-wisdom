import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Download } from '../../database/entities/download.entity';


@Injectable()
export class DownloadService {
  constructor(
    @InjectRepository(Download)
    private downloadRepository: Repository<Download>,
  ) {}

  findAll(): Promise<Download[]> {
    return this.downloadRepository.find();
  }

  findOne(id: number): Promise<Download> {
    return this.downloadRepository.findOne({ where: { iddownloads: id } });
  }

  create(download: Download): Promise<Download> {
    return this.downloadRepository.save(download);
  }

  async update(id: number, download: Download): Promise<Download> {
    await this.downloadRepository.update(id, download);
    return this.downloadRepository.findOne({ where: { iddownloads: id } });
  }

  async remove(id: number): Promise<void> {
    await this.downloadRepository.delete(id);
  }
}
