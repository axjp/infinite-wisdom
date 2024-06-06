import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import {administratorS}

@Controller('customer')
export class AdministratorControler {
  constructor( private readonly administratorServices:AdministratorServices){

  }
  @Get()
  findUsers(@Query('id') id: number, @Query('state')state: boolean){
    return this.administratorServices.findAll();

  }}