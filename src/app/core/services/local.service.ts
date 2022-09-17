import { Injectable } from '@angular/core';

const LANGUAGE_KEY = 'Language';
const THEME_KEY = 'Theme';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  
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
}
