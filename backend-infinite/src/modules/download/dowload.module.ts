import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DownloadService } from './download.service';
import { DownloadController } from './download.controller';
import { Download } from '../../database/entities/download.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Download])],
  providers: [DownloadService],
  controllers: [DownloadController],
})
export class DownloadModule {}
