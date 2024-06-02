import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { Loan } from '../../database/entities/loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  providers: [LoanService],
  controllers: [LoanController],
})
export class LoanModule {}
