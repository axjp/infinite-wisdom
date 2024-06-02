import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from '../../database/entities/rol.entity';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(+id);
  }

  @Post()
  create(@Body() rol: Rol) {
    return this.rolService.create(rol);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() rol: Rol) {
    return this.rolService.update(+id, rol);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }
}
