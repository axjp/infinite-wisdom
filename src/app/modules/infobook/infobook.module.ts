import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfobookRoutingModule } from './infobook-routing.module';
import { InfobookComponent } from './component/infobook.component';


@NgModule({
  declarations: [
    InfobookComponent
  ],
  imports: [
    CommonModule,
    InfobookRoutingModule
  ]
})
export class InfobookModule { }
