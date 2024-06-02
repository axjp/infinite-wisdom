import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GenderService } from './gender.service';
import { Gender } from '../../database/entities/gender.entity';

@Controller('genders')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @Post()
  create(@Body() gender: Gender) {
    return this.genderService.create(gender);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() gender: Gender) {
    return this.genderService.update(+id, gender);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
