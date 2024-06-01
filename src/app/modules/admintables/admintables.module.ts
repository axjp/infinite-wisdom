import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintablesRoutingModule } from './admintables-routing.module';
import { AdmintablesComponent } from './component/admintables.component';


@NgModule({
  declarations: [
    AdmintablesComponent
  ],
  imports: [
    CommonModule,
    AdmintablesRoutingModule
  ]
})
export class AdmintablesModule { }
