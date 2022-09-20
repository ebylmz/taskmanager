import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../services/localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser$ !: BehaviorSubject<User | null>;

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService, private router: Router) {
    this.loggedInUser$ = new BehaviorSubject<User | null>(this.localStorageService.getUser());
  }

  getUser(): User | null {
    return this.loggedInUser$.getValue();
  }

  setUser(user: User): void {
    this.localStorageService.setUser(user);
    this.loggedInUser$.next(user);
  }

  updateUser(user: User): void {
    this.setUser(user);
    this.apiService.updateUser(user);
  }

  isLoggedIn(): boolean {
    return this.getUser() != null;
  }

  signIn(firstName: string, lastName: string, username: string, email: string, password: string): Observable<any> {
    let user: User = {
      "id": 0,
      "username": username,
      "firstName": firstName,
      "lastName": lastName,
      "email": email, 
    };
    this.setUser(user);
    this.router.navigate(["/inbox-view"]);
    this.localStorageService.setUser(user);
    return this.apiService.signIn(username, email, password);
  }

  signUp(username: string, password: string): Observable<any> {
    return this.apiService.signUp(username, password);
  }

  signOut() {
    this.loggedInUser$.next(null);
    this.localStorageService.removeUser();
    this.router.navigate(["/sign-in"]);
  }
}
