import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.component.html',
  styleUrls: ['./language-settings.component.scss']
})
export class LanguageSettingsComponent implements OnInit {

  language !: string;

  constructor() { }

  ngOnInit(): void {
    this.language = "en";
    // TODO: set/get local storage value
  }
}
