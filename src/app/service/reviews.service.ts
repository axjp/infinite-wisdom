import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:3000/review'; // Asegúrate de que esta URL sea correcta.

  constructor(private http: HttpClient) { }

  createReview(reviewData: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, reviewData);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getReview(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.apiUrl}/${id}`);
  }

  updateReview(id: number, reviewData: Review): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${id}`, reviewData);
  }

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
