import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Lang {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selectedLanguage = 'es';
  languages: Lang[] = [
    {value: 'es', viewValue: 'ESP'},
    {value: 'en', viewValue: 'EN'},
  ];

  constructor(private translate: TranslateService) {
  }

  onLanguageChange(event: any): void {
    const selectedLang = event.value;
    this.translate.use(selectedLang);
  }
}
