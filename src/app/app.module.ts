import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/header/component/header.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './modules/login/component/login.component';
import { MainComponent } from './modules/main/component/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './modules/footer/component/footer.component';
import { RegisterComponent } from './modules/register/component/register.component';
import { UploadComponent } from './modules/upload/component/upload.component';
import { RegisteradminComponent } from './modules/registeradmin/component/registeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { UsertablesComponent } from './modules/usertables/component/usertables.component';
import { AdmintablesComponent } from './modules/admintables/component/admintables.component';
import { BooktablesComponent } from './modules/booktables/component/booktables.component';
import { InfobookComponent } from './modules/infobook/component/infobook.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent

],

  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    ReviewsModule,
    NgbModule,
    LoanModule,
  FooterModule  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
