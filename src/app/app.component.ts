import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template:`<h1>Angular 19 Yenilikleri</h1>
  <input [(ngModel)]="name"/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19';
  name=signal<string>("");
}
