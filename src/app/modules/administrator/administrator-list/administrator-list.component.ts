import { Component,inject } from '@angular/core';
import { AdministratorService } from '../../../service/administrator.service';
import { AdministratorI } from '../../../models/administrator.interface';


@Component({
  selector: 'app-administrator-list',
  templateUrl: './administrator-list.component.html',
  styleUrl: './administrator-list.component.scss'
})
export class AdministratorListComponent {
private readonly administratorService = inject(AdministratorService);
protected administrators: AdministratorI[]=[];
protected administrator: AdministratorI={};

constructor(){
  this.findAdministrators();
}

findAdministrators(){
  this.administratorService.findAdministrators().subscribe(response=>{
    this.administrators = response;
    console.log(this.administrators);
  });
}

createAdministrator(){
  this.administratorService.createAdministrator({}).subscribe(response=>{
    console.log(response);
  });
}
updateAdministrator() {
  this.administratorService.updateAdministrator('1', {}).subscribe(response => {
    console.log(response);
  })
}

deleteAdministrator() {
  this.administratorService.deleteAdministrator('1').subscribe(response => {
    console.log(response);
  })
}

findAdministratorrOne(id: string) {
  this.administratorService.findAdministratorOne(id).subscribe(response => {
    this.administrator = response;
  });
}
}

