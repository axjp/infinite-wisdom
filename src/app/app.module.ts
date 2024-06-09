// Importaciones de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importaciones de módulos personalizados
import { AppRoutingModule } from './app-routing.module';
import { UsertablesModule } from './modules/usertables/usertables.module';
import { LoginModule } from './modules/login/login.module';
import { MainModule } from './modules/main/main.module';
import { FooterModule } from './modules/footer/footer.module';
import { RegisterModule } from './modules/register/register.module';
import { UploadModule } from './modules/upload/upload.module';
import { RegisteradminModule } from './modules/registeradmin/registeradmin.module';
import { AdmintablesModule } from './modules/admintables/admintables.module';
import { BooktablesModule } from './modules/booktables/booktables.module';
import { InfobookModule } from './modules/infobook/infobook.module';

// Declaraciones
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/component/header.component';
import { FooterComponent } from './modules/footer/component/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
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
    FooterModule,
    RegisterModule,
    UploadModule,
    RegisteradminModule,
    AdmintablesModule,
    BooktablesModule,
    InfobookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
