import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './component/upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UploadComponent
  ]
})
export class UploadModule { }
