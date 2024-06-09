import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsListComponent } from './reviews-list/reviews-list.component'; // Importa tu componente

@NgModule({
  declarations: [
    ReviewsListComponent // Declara tu componente aquí
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewsListComponent // Exporta tu componente si es necesario
  ]
})
export class ReviewsModule { }
