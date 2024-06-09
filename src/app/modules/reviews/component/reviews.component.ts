import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewsService } from '../../../service/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder, private reviewsService: ReviewsService) {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required],
      is_approved: [false],
      idcustomer: [null, Validators.required],
      idbooks: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  get rating() {
    return this.reviewForm.get('rating');
  }

  get comment() {
    return this.reviewForm.get('comment');
  }

  get is_approved() {
    return this.reviewForm.get('is_approved');
  }

  get idcustomer() {
    return this.reviewForm.get('idcustomer');
  }

  get idbooks() {
    return this.reviewForm.get('idbooks');
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      this.reviewsService.createReview(this.reviewForm.value).subscribe(
        response => {
          console.log('Review created successfully!', response);
        },
        error => {
          console.error('Error creating review', error);
        }
      );
    }
  }
}
