import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from '../../database/entities/loan.entity';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanService.findOne(+id);
  }

  @Post()
  create(@Body() loan: Loan) {
    return this.loanService.create(loan);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() loan: Loan) {
    return this.loanService.update(+id, loan);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanService.remove(+id);
  }
}
