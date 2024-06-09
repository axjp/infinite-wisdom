import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanService } from '../../services/loan.service';
import { LoanController } from '../../controllers/loan.controller';
import { Loan } from '../../entities/loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  providers: [LoanService],
  controllers: [LoanController],
})
export class LoanModule {}
