import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../../service/reviews.service';
import { Review } from '../../../models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviewForm: FormGroup;
  reviews: Review[] = [];

  constructor(private fb: FormBuilder, private reviewService: ReviewService) {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required],
      is_approved: [false],
    });
  }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe({
      next: (reviews) => {
        this.reviews = reviews;
      },
      error: (error) => {
        console.error('Error fetching reviews:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      this.reviewService.createReview(this.reviewForm.value).subscribe({
        next: (response) => {
          console.log('Review created successfully!', response);
          alert('Datos enviados'); // Show alert on successful submission
          this.loadReviews(); // Reload the reviews after successful creation
          this.reviewForm.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error('Error creating review', error);
          alert('Error al enviar los datos'); // Show alert on error
        }
      });
    }
  }
}
