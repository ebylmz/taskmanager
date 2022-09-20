import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  
  user !: User;

  form !: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.user = {id: 0, username: "julia.roberts",  firstName: "Julia",  lastName: "Roberts",  email: "j.roberts@gmail.com"}
    this.user = <User> this.authService.getUser();

    this.form = this.fb.group({
      username: [this.user.username, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: ["", [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  updateUser(): void {
    this.user.firstName = this.form.get("firstName")?.value;
    this.user.lastName = this.form.get("lastName")?.value;
    this.user.username  = this.form.get("username")?.value;
    this.user.email = this.form.get("email")?.value;
    // update password
    this.authService.updateUser(this.user);
  }
}