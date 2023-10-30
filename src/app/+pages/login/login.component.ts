import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as dialog from '@angular/material/dialog';

import { AlertComponent } from '../alert/alert.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent {
  constructor(public dialog: dialog.MatDialog ) {}

  

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AlertComponent, {
      width: '400px',
      height:'610px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  mobileFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  show(){
    console.log(this.mobileFormControl.value,this.passwordFormControl.value);

  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export class DialogAnimationsExample {
  constructor(public dialog: dialog.MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AlertComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: dialog.MatDialogRef<DialogAnimationsExampleDialog>) {}
}
