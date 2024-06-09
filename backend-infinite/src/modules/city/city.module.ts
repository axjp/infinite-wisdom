import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from '../../services/city.service';
import { CityController } from '../../controllers/city.controller';
import { City } from '../../entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
