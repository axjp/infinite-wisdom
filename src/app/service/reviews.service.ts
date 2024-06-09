import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl = 'http://localhost:3000/reviews'; 

  constructor(private http: HttpClient) { }

  createReview(reviewData: any): Observable<any> {
    return this.http.post(this.apiUrl, reviewData);
  }

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
