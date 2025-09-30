import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms'; 

@Component({
  selector: 'app-root',
  imports: [Rooms],
  templateUrl : './app.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>happy happy 
  //   happy</p>`,
  styleUrl: './app.scss'
  // styles : [`h1 { color : red} `]
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
