import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderMode = false;

  homeTitle = 'HOME.TITLE';
  translateBtnLabel = 'BUTTON.LABEL';
  currentLanguage = 'de';

  constructor(private router: Router, public title: Title, public translate: TranslateService) {
    this.title.setTitle('Administration');
    translate.addLangs(['en', 'de']);
    this.translateLanguage();
  }

  navigateToOrderPage(): void {
    if (!this.orderMode) {
      this.router.navigate(['start', 'bestellung']);
    } else {
      this.router.navigate(['start']);
    }
    this.orderMode = !this.orderMode;
  }

  translateLanguage() {
    if (this.currentLanguage === 'en') {
      this.translateLang('en');
      this.currentLanguage = 'de';
    } else {
      this.translateLang('de');
      this.currentLanguage = 'en';
    }
  }

  translateLang(lang: 'en' | 'de'): void {
    this.translate.use(lang);
  }
}
