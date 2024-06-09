import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from '../entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  findOne(id: number): Promise<Review> {
    return this.reviewRepository.findOne({ where: { idreview: id } });
  }

  create(review: Review): Promise<Review> {
    return this.reviewRepository.save(review);
  }

  async update(id: number, review: Review): Promise<Review> {
    await this.reviewRepository.update(id, review);
    return this.reviewRepository.findOne({ where: { idreview: id } });
  }

  async remove(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}
