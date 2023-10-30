import { Component, Directive, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NG_VALIDATORS,
  NgControl,
  NgForm,
  PatternValidator,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as dialog from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  mobileFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^09[0-9]{9}$'),
  ]);
  passwordFormControl = new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]);
  type1formcontrol = new FormControl('');
  type2formcontrol = new FormControl('');

  constructor(public dialog: dialog.MatDialog,public http:HttpClient,public router:Router ) {}
  check(){
    this.http.post('https://localhost:7043/adminlogin',
    {username:this.mobileFormControl.value,password:this.passwordFormControl.value}).subscribe(result=>{
      if((result as any).isok==true)
      {
        this.router.navigateByUrl('/dashboard');
      }
    })
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(RegisterComponent, {
      width: '750px',
      height: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  matcher = new MyErrorStateMatcher();
  show() {
    console.log(this.type1formcontrol.value);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
