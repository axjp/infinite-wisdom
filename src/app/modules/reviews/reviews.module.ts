import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './component/reviews.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsService } from '../../service/reviews.service';


@NgModule({
  declarations: [
    ReviewsComponent,
    ReviewsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReviewsRoutingModule
  ],
  providers: [ReviewsService]
})
export class ReviewsModule { }
