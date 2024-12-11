import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template:`<h1>Angular 19 Yenilikleri</h1>
  <input type="text" value="ali can yücel">
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19';
}
