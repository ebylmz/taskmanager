import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Theme } from 'src/app/core/enums/theme';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private translateService: TranslateService, private localService: LocalService) {}

  ngOnInit(): void {
    this.setLanguage();
    this.setTheme();
  }

  setLanguage(): void {
    let lang: string | null = this.localService.getLanguage();
    if (lang == null || this.translateService.getLangs().indexOf(lang) == -1) {
      let defaultLang: string = this.translateService.defaultLang;
      lang = this.translateService.defaultLang;
      this.localService.setLanguage(defaultLang);
    }
    this.translateService.use(lang);
  }

  setTheme(): void {
    let theme: string | null = this.localService.getTheme();
    if (theme == null) {
      this.localService.setTheme(Theme.LIGHT);
    }
    else if (theme == Theme.DARK) {
      document.body.classList.toggle("dark-theme");
    }
  }
}
