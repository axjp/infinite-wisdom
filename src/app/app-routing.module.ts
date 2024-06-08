import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/component/main.component';
import { LoginComponent } from './modules/login/component/login.component';
import { RegisterComponent } from './modules/register/component/register.component';
import { UploadComponent } from './modules/upload/component/upload.component';
import { RegisteradminComponent } from './modules/registeradmin/component/registeradmin.component';
import { UsertablesComponent } from './modules/usertables/component/usertables.component';
import { LoanComponent } from './modules/loan/component/loan.component';
import { InfobookComponent } from './modules/infobook/component/infobook.component';
import { BooktablesComponent } from './modules/booktables/component/booktables.component';
import { AdmintablesComponent } from './modules/admintables/component/admintables.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register/:idcustomer', component: RegisterComponent },
  { path: 'upload/:idbook', component: UploadComponent },
  { path: 'registeradmin/:idadministrator', component: RegisteradminComponent },
  { path: 'usertables', component: UsertablesComponent  },
  { path: 'admintables', component: AdmintablesComponent },
  { path: 'booktables', component: BooktablesComponent },
  { path: 'infobook', component: InfobookComponent },
  { path: 'Loan', component: LoanComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
