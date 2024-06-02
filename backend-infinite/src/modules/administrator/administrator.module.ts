import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { Administrator } from '../../database/entities/administrator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  providers: [AdministratorService],
  controllers: [AdministratorController],
})
export class AdministratorModule {}
