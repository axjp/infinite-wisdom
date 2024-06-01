import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooktablesRoutingModule } from './booktables-routing.module';
import { BooktablesComponent } from './component/booktables.component';


@NgModule({
  declarations: [
    BooktablesComponent
  ],
  imports: [
    CommonModule,
    BooktablesRoutingModule
  ]
})
export class BooktablesModule { }
