import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)], this.uniqueNameValidator.bind(this)],
      emails: this.fb.array([this.fb.control('')]),
      male: [true],
      password: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        cpassword: ['', [Validators.required, Validators.minLength(5)]],
      }, {
        validators: [this.equalFields]
      })
    });

    setTimeout(() => {
      this.signupForm.patchValue({username: 'IGORNEPIPENKO'});
    }, 5000);
  }

  public signup(v: { username: string, password: { password: string, cpassword: string } }) {
    console.log(v);
  }


  public uniqueNameValidator({value}: FormControl): Observable<ValidationErrors | null> {
    return this.http.post('/auth/checkUsername', {username: value})
      .pipe(
        catchError(() => {
          return of(null);
        })
      );
  }

  public equalFields({value: {password, cpassword}}: FormGroup): ValidationErrors | null {
    return password === cpassword
      ? null
      : {
        equal: 'Password and Confirm Password should be the same '
      };

  }


  public getControls(control: AbstractControl, path: string): AbstractControl[] {
    return (control.get(path) as FormArray).controls;
  }

  public addEmail() {
    (this.signupForm.get('emails') as FormArray).push(this.fb.control(''));
  }

  public removeEmail(index: number) {
    (this.signupForm.get('emails') as FormArray).removeAt(index);
  }
}
