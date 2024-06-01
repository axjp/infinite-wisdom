import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected form: FormGroup;
  customer: any = null;
  idcustomer: any = null;
  cities: any = [];
  genders: any = [];

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute,

  ) {
    this.form = this.formBuilder.group(
      {
        names: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        lastname: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
        birthdate: [null, [Validators.required]],
        idgender: [null, [Validators.required]],
        idcity: [null, [Validators.required]],
      }

    );

    this.route.params.subscribe(params => {
      this.idcustomer = +params['idcustomer'];
      this.getcustomer(this.idcustomer);
    });

    this.getcities();
    this.getgenders();
  }


  save() {
    if (this.form.status === 'VALID') {
      const url = 'http://localhost:3000/register';
      this.httpClient.post(url, this.form.value).subscribe(response => {
        alert(response);
      });
    } else {
      this.form.markAllAsTouched();
      alert('Por favor, completa los campos correctamente.')
    }
  }

  update() {
    const url = 'http://localhost:3000/register/' + this.idcustomer;
    this.httpClient.put(url, this.form.value).subscribe(response => {
      alert(response);
    });
  }

  getgenders() {
    const url = 'http://localhost:3000/genders';
    this.httpClient.get<any>(url).subscribe(response => {
      this.genders = response;
    });
  }
  getcities() {
    const url = 'http://localhost:3000/cities';
    this.httpClient.get<any>(url).subscribe(response => {
      this.cities = response;
    });
  }

  getcustomer(idcustomer: number) {
    const url = 'http://localhost:3000/register/' + idcustomer;
    this.httpClient.get<any>(url).subscribe(response => {
      if (response) {
        const formattedDate = response.birthdate.split('T')[0];

        this.form.patchValue({
          ...response,
          birthdate: formattedDate
        });
      }
    });
  }
}




