import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  language !: string;

  constructor(public translateService: TranslateService, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.language = this.translateService.currentLang;
    if (this.language == undefined)
      this.language = this.translateService.defaultLang;
  }

  translateLanguageTo(lang: string): void {
    this.translateService.use(lang);
    this.localStorageService.setLanguage(lang);
  }
}
