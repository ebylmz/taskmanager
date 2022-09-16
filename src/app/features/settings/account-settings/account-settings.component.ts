import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  
  user !: User;

  form !: FormGroup;

  constructor(private fb: FormBuilder) {
    this.user = {id: 0, username: "julia.roberts",  firstName: "Julia",  lastName: "Roberts",  email: "j.roberts@gmail.com"}
    
    this.form = this.fb.group({
      username: [this.user.username, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")]]
    });
  }

  ngOnInit(): void {
  }
}