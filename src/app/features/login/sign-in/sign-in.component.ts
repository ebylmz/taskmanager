import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  signInFailed: boolean = false;

  form !: FormGroup;
  
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router, 
    private fb: FormBuilder) {
      
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn())
      this.router.navigate(["/inbox-view"]);
  }

  onSubmit(): void {
    this.authService.signUp(
      this.form.get("username")?.value, 
      this.form.get("email")?.value).subscribe(
      data => {
        // check the http response
        this.localStorageService.setToken(data.accessToken);
        this.signInFailed = false;
      },
      err => {
        this.signInFailed = true;
        this.form.markAsPristine;
      }
    );
  }
}
