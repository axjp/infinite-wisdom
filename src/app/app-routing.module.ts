import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/component/main.component';
import { LoginComponent } from './modules/login/component/login.component';
import { RegisterComponent } from './modules/register/component/register.component';
import { UploadComponent } from './modules/upload/component/upload.component';
import { CommonModule } from '@angular/common';
import { UsertablesComponent } from './modules/usertables/component/usertables.component';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { BooktablesComponent } from './modules/booktables/component/booktables.component';
import { InfobookComponent } from './modules/infobook/component/infobook.component';
import { ReviewsComponent } from './modules/reviews/component/reviews.component';
import { ReviewsListComponent } from './modules/reviews/reviews-list/reviews-list.component';
import { LoanComponent } from './modules/loan/component/loan.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register/:idcustomer', component: RegisterComponent },
  { path: 'upload/:idbook', component: UploadComponent },
  { path:'common', loadChildren:()=>import('./common/common.module').then(m=>CommonModule)},
  { path: 'usertables', component: UsertablesComponent },
  { path:'administrator', loadChildren:()=>import('./modules/administrator/administrator.module').then(m=>AdministratorModule)},
  { path: 'booktables', component: BooktablesComponent },
  { path: 'infobook', component: InfobookComponent },
  { path: 'reviews-list', component: ReviewsListComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'loan', component: LoanComponent},
  { path: '**',redirectTo: 'common/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
