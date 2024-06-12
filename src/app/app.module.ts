import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './modules/header/component/header.component';
import { LoginComponent } from './modules/login/component/login.component';
import { MainComponent } from './modules/main/component/main.component';
import { FooterComponent } from './modules/footer/component/footer.component';
import { RegisterComponent } from './modules/register/component/register.component';
import { UploadComponent } from './modules/upload/component/upload.component';
import { UsertablesComponent } from './modules/usertables/component/usertables.component';
import { BooktablesComponent } from './modules/booktables/component/booktables.component';
import { InfobookComponent } from './modules/infobook/component/infobook.component';
import { UsertablesModule } from './modules/usertables/usertables.module';
import { HeaderModule } from './modules/header/header.module';
import { LoginModule } from './modules/login/login.module';
import { MainModule } from './modules/main/main.module';
import { FooterModule } from './modules/footer/footer.module';
import { RegisterModule } from './modules/register/register.module';
import { UploadModule } from './modules/upload/upload.module';
import { BooktablesModule } from './modules/booktables/booktables.module';
import { InfobookModule } from './modules/infobook/infobook.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { LoanModule } from './modules/loan/loan.module';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsertablesModule,
    LoginModule,
    MainModule,
    RegisterModule,
    UploadModule,
    BooktablesModule,
    InfobookModule,
    HeaderModule,
    ReviewsModule,
    NgbModule,
    LoanModule,
    FooterModule,
    AdministratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
