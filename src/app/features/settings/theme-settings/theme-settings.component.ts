import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Theme } from 'src/app/core/enums/theme';
import { LocalService } from 'src/app/core/services/local.service';

  const darkMode = "dark_mode";
  const lightMode = "light_mode";

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {

  mode !: string; 

  constructor(private localService: LocalService) {
  }

  ngOnInit() {
    let theme: string = <string> this.localService.getTheme();
    this.mode = theme == Theme.LIGHT ? lightMode : darkMode;
  }

  switchTheme(): void {
    let isDark: boolean = document.body.classList.toggle("dark-theme");
    if (isDark) {
      this.mode = darkMode;
      this.localService.setTheme(Theme.DARK);
    }
    else {
      this.mode = lightMode;
      this.localService.setTheme(Theme.LIGHT);
    }
  }
}