import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './modules/login/component/login.component';
import { MainComponent } from './modules/main/component/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './modules/register/component/register.component';
import { RegisteradminComponent } from './modules/registeradmin/component/registeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { UsertablesComponent } from './modules/usertables/component/usertables.component';
import { AdmintablesComponent } from './modules/admintables/component/admintables.component';
import { BooktablesComponent } from './modules/booktables/component/booktables.component';
import { InfobookComponent } from './modules/infobook/component/infobook.component';
import { UploadComponent } from './modules/upload/component/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    UploadComponent,
    RegisteradminComponent,
    UsertablesComponent,
    AdmintablesComponent,
    BooktablesComponent,
    InfobookComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
