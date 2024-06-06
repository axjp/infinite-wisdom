import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorService } from '../../services/administrator.service';
import { AdministratorController } from '../../controllers/administrator.controller';
import { Administrator } from '../../entities/administrator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  providers: [AdministratorService],
  controllers: [AdministratorController],
})
export class AdministratorModule {}
