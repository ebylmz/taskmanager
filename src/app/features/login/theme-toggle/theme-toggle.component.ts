import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

const darkMode = "dark_mode";
const lightMode = "light_mode";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  mode !: string; 

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    let theme: string = <string> this.localStorageService.getTheme();
    this.mode = theme == Theme.LIGHT ? darkMode : lightMode;
  }

  switchTheme(): void {
    let isDark: boolean = document.body.classList.toggle("dark-theme");
    if (isDark) {
      this.mode = lightMode;
      this.localStorageService.setTheme(Theme.DARK);
    }
    else {
      this.mode = darkMode;
      this.localStorageService.setTheme(Theme.LIGHT);
    }
  }
}