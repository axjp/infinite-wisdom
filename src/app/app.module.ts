import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modulos/header/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './modulos/login/login.component';
import { MainComponent } from './modulos/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './modulos/footer/footer.component';
import { RegisterComponent } from './modulos/register/register.component';
import { UploadComponent } from './upload/upload.component';
import { RegisteradminComponent } from './modulos/registeradmin/registeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { UsertablesComponent } from './modulos/usertables/usertables.component';
import { AdmintablesComponent } from './modulos/admintables/admintables.component';
import { BooktablesComponent } from './modulos/booktables/booktables.component';
import { InfobookComponent } from './modulos/infobook/infobook.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    FooterComponent,
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
