import { Component, signal, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { CommonModule } from '@angular/common';
import { Container } from './container/container';
import { Employee } from './employee/employee';


@Component({
  selector: 'app-root',
  imports: [Rooms, CommonModule, Container, Employee],
  templateUrl: './app.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>happy happy 
  //   happy</p>`,
  styleUrl: './app.scss'
  // styles : [`h1 { color : red} `]
})
export class App {

  protected readonly title = signal('hotelinventoryapp');

  // role: string = 'Admin';


  @ViewChild('name', { static: true }) name !: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Welcome to Angular 17";
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr !: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(Rooms);
  //   componentRef.instance.numberOfRooms = 50;
  // }


}
