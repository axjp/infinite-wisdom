import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderService } from '../../services/gender.service';
import { GenderController } from '../../controllers/gender.controller';
import { Gender } from '../../entities/gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  providers: [GenderService],
  controllers: [GenderController],
})
export class GenderModule {}
