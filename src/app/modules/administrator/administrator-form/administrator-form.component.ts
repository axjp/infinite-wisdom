import { Component, inject, } from '@angular/core';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-administrator-form',
  templateUrl: './administrator-form.component.html',
  styleUrls: ['./administrator-form.component.scss']
})
export class AdministratorFormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  

  /*protected nameControl: FormControl = new FormControl<string>('');
  protected lastnameControl: FormControl = new FormControl<string>('');
  protected numberControl: FormControl = new FormControl<string>('');
  protected birthdayControl: FormControl = new FormControl<string>('');
  protected stateControl: FormControl = new FormControl<string>('');
  protected emailControl: FormControl = new FormControl<string>('');
  protected passwordControl: FormControl = new FormControl<string>('');*/

  protected form: FormGroup;

  nameField: any;
  lastNameField:any;
  numberField: any;
  birthdateField: any;
  booleanoField: any;
  emailField:any;
  passwordField:any;
  constructor() {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      number: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      birthdate: ['', [Validators.required]],
      booleano: [false, Validators.requiredTrue]
    });
  }

  validateForm(): void {
    if (this.form.valid) {
      alert('Valido');
      this.onSubmit();
    } else {
      alert('No Valido');
    }

  }
  onSubmit() {
    console.log(this.form.value);
  }
}




