import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.component.html',
  styleUrls: ['./language-settings.component.scss']
})
export class LanguageSettingsComponent implements OnInit {

  language !: string;

  constructor(public translateService: TranslateService, private localService: LocalService) {
  }

  ngOnInit(): void {
    this.language = this.translateService.currentLang;
    if (this.language == undefined)
      this.language = this.translateService.defaultLang;
  }

  translateLanguageTo(lang: string): void {
    this.translateService.use(lang);
    this.localService.setLanguage(lang);
  }
}
