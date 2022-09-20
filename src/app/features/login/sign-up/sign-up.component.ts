import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpFailed: boolean = false;

  form !: FormGroup;
  
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/inbox-view"]);
    }
  }

  onSubmit(): void {
    this.authService.signIn(
      this.form.get("firstName")?.value, 
      this.form.get("lastName")?.value, 
      this.form.get("username")?.value, 
      this.form.get("email")?.value, 
      this.form.get("password")?.value).subscribe(
      data => {
        // check the http response
        this.signUpFailed = false;
      },
      err => {
        this.signUpFailed = true;
        this.form.markAsPristine;
      }
    );
  }
}
