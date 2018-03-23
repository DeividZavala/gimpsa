import { Component } from '@angular/core';
import * as uikit from 'uikit';
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header class="uk-padding-small noprint">
        <img class="uk-height-1-1 noprint" src="img/logo.png">
      </header>
      <div class="app__content noprint">
        <nav class="noprint">
          <a
            routerLink="/areas/boveda"
            routerLinkActive="active">
            Boveda
          </a>
          <a
            routerLink="/areas/lab"
            routerLinkActive="active">
            Laboratorio
          </a>
        </nav>
        <div class="uk-section-small uk-width-1-1 outlet-section">
          <div class="uk-container">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {}
