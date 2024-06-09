import { Component, OnInit } from '@angular/core';

import { ReviewsService } from '../../../service/reviews.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {
  reviews: any[] = [];

  constructor(private ReviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.ReviewsService.getReviews().subscribe(
      data => {
        this.reviews = data;
      },
      error => {
        console.error('Error fetching reviews', error);
      }
    );
  }
}
