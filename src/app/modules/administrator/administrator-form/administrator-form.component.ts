import { Component, inject } from '@angular/core';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-administrator-form',
  templateUrl: './administrator-form.component.html',
  styleUrls: ['./administrator-form.component.scss']
})
export class AdministratorFormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);

  //protected nameControl: FormControl = new FormControl<string>('');
  //protected lastnameControl: FormControl = new FormControl<string>('');
  //protected numberControl: FormControl = new FormControl<number>('');
  //protected birthdayControl: FormControl = new FormControl<date>('');
  //protected stateControl: FormControl = new FormControl<boolean>('');

  protected form: FormGroup;

  nameField: any;
  lastNameField:any;
  numberField: any;
  birthdateField: any;
  booleanoField: any;

  constructor() {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      number: [null, [Validators.min(1), Validators.required]],
      birthdate: [[], [Validators.required]],
      booleano: [false, Validators.requiredTrue]
    });
  }

  validateForm(): void {
    if (this.form.valid) {
      alert('Valido');
    } else {
      alert('No Valido');
    }

  }
  onSubmit() {
    console.log(this.form.value);
  }
}




