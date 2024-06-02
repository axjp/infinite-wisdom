import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DownloadService } from './download.service';
import { Download } from '../../database/entities/download.entity';

@Controller('downloads')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get()
  findAll() {
    return this.downloadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.downloadService.findOne(+id);
  }

  @Post()
  create(@Body() download: Download) {
    return this.downloadService.create(download);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() download: Download) {
    return this.downloadService.update(+id, download);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.downloadService.remove(+id);
  }
}
