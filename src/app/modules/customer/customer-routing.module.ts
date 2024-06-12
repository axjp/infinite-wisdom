import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  {path:'',
    component: CustomerformComponent
  },
  {path: '',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
