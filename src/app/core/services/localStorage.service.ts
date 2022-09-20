import { Injectable } from '@angular/core';
import { User } from '../models/user';

const TOKEN_KEY = "auth-token";
const LANGUAGE_KEY = "language";
const THEME_KEY = "theme";
const USER_KEY = "user";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() { }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }

  setUser(user: User): void {
    this.set(USER_KEY, JSON.stringify(user));
  }

  getUser(): User | null {
    let user: string | null = this.get(USER_KEY);
    return user != null ? JSON.parse(user) : null;
  }

  removeUser(): void {
    this.remove(USER_KEY);
  }

  setTheme(theme: string): void {
    this.set(THEME_KEY, theme);
  }

  getTheme(): string | null {
    return this.get(THEME_KEY);
  }

  setLanguage(lang: string): void {
    this.set(LANGUAGE_KEY, lang);
  }

  getLanguage(): string | null {
    return this.get(LANGUAGE_KEY);
  }

  setToken(token: string): void {
    this.set(TOKEN_KEY, token);
  } 
  
  getToken(): string | null {
    return this.get(TOKEN_KEY);
  }
}
