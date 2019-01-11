import { Component } from '@angular/core';
import site from '../config/sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  site = site;
  isCollapsed = false;
  triggerTemplate = null;

}
