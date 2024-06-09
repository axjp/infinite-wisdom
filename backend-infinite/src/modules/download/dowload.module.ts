import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DownloadService } from '../../services/download.service';
import { DownloadController } from '../../controllers/download.controller';
import { Download } from '../../entities/download.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Download])],
  providers: [DownloadService],
  controllers: [DownloadController],
})
export class DownloadModule {}
