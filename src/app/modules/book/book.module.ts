import { NgModule } from '@angular/core';
import {  CommonModule as NgCommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookProductComponent } from './book-product/book-product.component';


@NgModule({
  declarations: [
    BookFormComponent,
    BookListComponent,
    BookProductComponent
  ],
  imports: [
    NgCommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
