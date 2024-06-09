import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AdministratorService } from '../services/administrator.service';
import { Administrator } from '../entities/administrator.entity';

@Controller('administrators')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  findAll() {
    return this.administratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administratorService.findOne(+id);
  }

  @Post()
  create(@Body() administrator: Administrator) {
    return this.administratorService.create(administrator);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() administrator: Administrator) {
    return this.administratorService.update(+id, administrator);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administratorService.remove(+id);
  }
}
