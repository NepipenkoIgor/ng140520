import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  public goToLogin() {
   this.router.navigate(['/login']);
  }

}
