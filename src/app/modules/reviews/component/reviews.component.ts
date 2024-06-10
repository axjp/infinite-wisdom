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
      next: (review) => {
        this.reviews = review;
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
          alert('Datos enviados'); // Mostrar alerta de datos enviados
          this.loadReviews(); // Recargar las reseñas después de la creación exitosa
        },
        error: (error) => {
          console.error('Error creating review', error);
          alert('Error al enviar los datos'); // Mostrar alerta de error
        }
      });
    }
  }
}
