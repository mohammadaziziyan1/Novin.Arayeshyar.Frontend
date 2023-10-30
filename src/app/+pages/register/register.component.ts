import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(public fb: FormBuilder) {}
  registerform = this.fb.group({
    mobile: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
    type1: [''],
    type2: [''],
    title: [''],
    gender: [''],
    personal: this.fb.group({
      nationalcode: [''],
      firstname: [''],
      lastname: [''],
      Dateofbirth: [''],
      completeaddress: [''],
      street: [''],
      state: [''],
      city: [''],
      postalcode: [''],
      alley: [''],
      Plaque: [''],
    }),
  });
  sabt = this.fb.group({
    rules: [''],
  });
  show() {
    console.log(this.registerform.controls['gender'].value);
  }
  panelOpenState = false;
}
