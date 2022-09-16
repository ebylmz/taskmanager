import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {

  mode !: string; 

  constructor() { }

  ngOnInit() {
    this.mode = "light_mode"; // TODO: read from local storage
  }

  toggleDarkTheme(event: MatSlideToggleChange) {
    this.mode = event.checked ? "dark_mode" : "light_mode"; 
    // TODO: change local storage
    document.body.classList.toggle("dark-theme");
  }
}
