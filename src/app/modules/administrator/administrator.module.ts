import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorFormComponent } from './administrator-form/administrator-form.component';
import { AdministratorListComponent } from './administrator-list/administrator-list.component';



@NgModule({
  declarations: [
    AdministratorFormComponent,
    AdministratorListComponent,
  
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    ReactiveFormsModule,
    BrowserModule,

  ]
})
export class AdministratorModule { }
