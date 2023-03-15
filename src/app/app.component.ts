import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomIconsService } from './core/services/custom-icons/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private translate: TranslateService,
    private customIconsService: CustomIconsService
    ) {
    translate.setDefaultLang('en');
    customIconsService.registerIcons();
  }
}
