import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskmanager-frontend'; 

  constructor(public translateService: TranslateService) {
    translateService.addLangs(["en", "tr"]);
    translateService.setDefaultLang("en");
  }
}
