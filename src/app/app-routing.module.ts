import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modulos/main/main.component';
import { LoginComponent } from './modulos/login/login.component';
import { RegisterComponent } from './modulos/register/register.component';
import { UploadComponent } from './upload/upload.component';
import { RegisteradminComponent } from './modulos/registeradmin/registeradmin.component';
import { UsertablesComponent } from './modulos/usertables/usertables.component';
import { AdmintablesComponent } from './modulos/admintables/admintables.component';
import { BooktablesComponent } from './modulos/booktables/booktables.component';
import { InfobookComponent } from './modulos/infobook/infobook.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register/:idcustomer', component: RegisterComponent },
  { path: 'upload/:idbook', component: UploadComponent },
  { path: 'registeradmin/:idadministrator', component: RegisteradminComponent },
  { path: 'usertables', component: UsertablesComponent },
  { path: 'admintables', component: AdmintablesComponent },
  { path: 'booktables', component: BooktablesComponent },
  { path: 'infobook', component: InfobookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
