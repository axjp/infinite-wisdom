import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from '../../services/rol.service';
import { RolController } from '../../controllers/rol.controller';
import { Rol } from '../../entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolService],
  controllers: [RolController],
})
export class RolModule {}
