import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        cpassword: ['', [Validators.required, Validators.minLength(5)]],
      })
    });
  }

  public signup(v: { username: string, password: { password: string, cpassword: string } }) {
    console.log(v);
  }

  public goToLogin() {

    this.router.navigate(['/login']);
  }

}
