import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsertablesModule } from './modules/usertables/usertables.module';
import { HeaderModule } from './modules/header/header.module';
import { LoginModule } from './modules/login/login.module';
import { MainModule } from './modules/main/main.module';
import { FooterModule } from './modules/footer/footer.module';
import { RegisterModule } from './modules/register/register.module';
import { UploadModule } from './modules/upload/upload.module';
import { RegisteradminModule } from './modules/registeradmin/registeradmin.module';
import { AdmintablesModule } from './modules/admintables/admintables.module';
import { BooktablesModule } from './modules/booktables/booktables.module';
import { InfobookModule } from './modules/infobook/infobook.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { LoanModule } from './modules/loan/loan.module';
//import { ReviewService } from '../../backend-infinite/src/services/review.service';
import { ReviewService } from './service/reviews.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UsertablesModule,
    LoginModule,
    MainModule,
    RegisterModule,
    UploadModule,
    RegisteradminModule,
    AdmintablesModule,
    BooktablesModule,
    InfobookModule,
    HeaderModule,
    FooterModule,
    ReviewsModule,
    LoanModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
