import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyTask } from 'src/app/core/models/my-task';
import { EisenhowerPriority } from '../enums/eisenhower-priority';
import { User } from '../models/user';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  updateUser(user: User): void {
    
  }

  signUp(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "signin", {
      username, 
      password
    }, httpOptions);
  }

  signIn(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "signup", {
      username, 
      email,
      password
    }, httpOptions);
  }

  getTasks(): MyTask[] {
    return Array.of(
      {title: "Have a solid workout", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Create the list-view", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Create the API of TaskManager App", priority: EisenhowerPriority.URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Take a walk", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Go to grocery", priority: EisenhowerPriority.NOT_URGENT_UNIMPORTANT, description: "", date: undefined, done: false},
      {title: "Talk with the professor about the summer project which hasn't been evaluated yet", priority: EisenhowerPriority.URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Sell the shares", priority: EisenhowerPriority.URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Send mail to MAVI", priority: EisenhowerPriority.URGENT_UNIMPORTANT, description: "", date: undefined, done: false},
      {title: "Apply angular folder structure to TaskManager App", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Practice meditation", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Cook ground beef", priority: EisenhowerPriority.URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Eat yoghurt before sleep", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Have a jump workout", priority: EisenhowerPriority.URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Call momy", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Check the google search algorithm", priority: EisenhowerPriority.NOT_URGENT_UNIMPORTANT, description: "", date: undefined, done: false},
      {title: "Learn to journaling", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Make research about museums in Istanbul", priority: EisenhowerPriority.NOT_URGENT_UNIMPORTANT, description: "", date: undefined, done: false},
      {title: "Update the CV", priority: EisenhowerPriority.NOT_URGENT_IMPORTANT, description: "", date: undefined, done: false},
      {title: "Watch Forest Gump", priority: EisenhowerPriority.NOT_URGENT_UNIMPORTANT, description: "", date: undefined, done: false},
    );
  }
}
