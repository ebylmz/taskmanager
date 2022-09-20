import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './core/auth/auth.service';
import { Theme } from './core/enums/theme';
import { User } from './core/models/user';
import { LocalStorageService } from './core/services/localStorage.service';

const DEFAULT_LANGUAGE: string = "en";
const DEFAULT_THEME: Theme = Theme.LIGHT;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'taskmanager-frontend'; 

  loggedInUser$ !: BehaviorSubject<User | null>;

  constructor(private translateService: TranslateService, private authService: AuthService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.translateService.addLangs(["en", "tr"]);
    this.setLanguage();
    this.setTheme();
    this.loggedInUser$ = this.authService.loggedInUser$;
  }

  setLanguage(): void {
    let lang: string | null = this.localStorageService.getLanguage();
    if (lang == null || !this.translateService.getLangs().includes(lang)) {
      this.translateService.setDefaultLang(DEFAULT_LANGUAGE); 
      this.localStorageService.setLanguage(DEFAULT_LANGUAGE);
    }
    else
      this.translateService.use(lang);
  }

  setTheme(): void {
    let theme: string | null = this.localStorageService.getTheme();
    if (theme == null)
      this.localStorageService.setTheme(DEFAULT_THEME);
    else if (theme == Theme.DARK)
      document.body.classList.toggle("dark-theme");
  }
}
