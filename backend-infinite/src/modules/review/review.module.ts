import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewService } from '../../services/review.service';
import { ReviewController } from '../../controllers/review.controller';
import { Review } from '../../entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
