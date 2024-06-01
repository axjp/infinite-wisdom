import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsertablesRoutingModule } from './usertables-routing.module';
import { UsertablesComponent } from './component/usertables.component';


@NgModule({
  declarations: [
    UsertablesComponent
  ],
  imports: [
    CommonModule,
    UsertablesRoutingModule
  ]
})
export class UsertablesModule { }
