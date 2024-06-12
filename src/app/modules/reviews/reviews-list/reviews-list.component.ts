import { Component, OnInit } from '@angular/core';

import { ReviewService } from '../../../service/reviews.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {
  reviews: any[] = [];

  constructor(private ReviewService: ReviewService) { }

  ngOnInit(): void {
    this.ReviewService.getReviews().subscribe(
      (      data: any[]) => {
        this.reviews = data;
      },
      (      error: any) => {
        console.error('Error fetching reviews', error);
      }
    );
  }
}
