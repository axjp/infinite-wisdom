import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { CustomersService } from '../../../service/customers.service';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrl: './customerform.component.scss'
})
export class CustomerformComponent implements OnInit {
  protected customerform: FormGroup;

  customer: any = null;
  cities: any = [];
  genders: any = [];
  cellphone: number | undefined;
  accept: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) {
    this.customerform = this.formBuilder.group(
      {
        names: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        lastname: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
        birthdate: [null, [Validators.required]],
        idgender: [null, [Validators.required]],
        idcity: [null, [Validators.required]],
        cellphone: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        accept: [false,[Validators.requiredTrue]]
      }

    );

   
  }
  ngOnInit(): void {}

  get names() {
    return this.customerform.get('names');
  }

  get lastName() {
    return this.customerform.get('lastname');
  }

  get accepted() {
    return this.customerform.get('accept');
  }

  get email() {
    return this.customerform.get('email');
  }
  get password() {
    return this.customerform.get('password');
  }
  get idgender() {
    return this.customerform.get('idgender');
  }
  get idcity() {
    return this.customerform.get('idcity');
  }
  get cellphones() {
    return this.customerform.get('cellphone');
  }
  get birthdate() {
    return this.customerform.get('birthdate');
  }

  onSubmit(): void {
    if (this.customerform.valid) {
      this.customersService.createCustomer(this.customerform.value).subscribe(
        response => {
          console.log('Customer created successfully!', response);
        },
        error => {
          console.error('Error creating Customer', error);
        }
      );
    }
  }
}
