import { Component, inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrator-form',
  templateUrl: './administrator-form.component.html',
  styleUrls: ['./administrator-form.component.scss']
})
export class AdministratorFormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);

  protected nameControl:FormControl=new FormControl<string>('');
  protected lastnameControl:FormControl=new FormControl<string>('');
  protected numberControl:FormControl=new FormControl<string>('');
  protected birthdayControl:FormControl=new FormControl<string>('');
  protected stateControl:FormControl=new FormControl<string>('');
   
  protected form: FormGroup;
numberField: any;
nameField: any;
birthdateField: any;
booleanoField: any;

  constructor() { 
    this.form=this.buildForm;
  }

  get buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
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




