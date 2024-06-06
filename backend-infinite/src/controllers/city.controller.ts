import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CityService } from '../services/city.service';
import { City } from '../entities/city.entity';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Post()
  create(@Body() city: City) {
    return this.cityService.create(city);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() city: City) {
    return this.cityService.update(+id, city);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
