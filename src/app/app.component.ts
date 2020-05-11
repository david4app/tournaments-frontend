import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turnirweb';
  template: `
  <!-- header -->
  <app-header></app-header>

  <!-- testing the home page -->
  <app-home></app-home>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <app-footer></app-footer>
`
}
