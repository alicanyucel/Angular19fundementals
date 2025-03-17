import { HttpClient } from '@angular/common/http';
import { Component, inject, input, resource } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  template: ``,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userId = input.required<number>()
  #http = inject(HttpClient);
  data = resource({
    request: this.userId,
    loader: async ({ request: id }) => {
      const result = await lastValueFrom(this.#http.get('https://jsonplaceholder.typicode.com/users/${id}'));
      return result;
    }
  })
}
