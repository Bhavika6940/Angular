import { Component } from '@angular/core';
import { Employee } from '../employee/employee';
import { Rooms } from '../rooms/rooms';

@Component({
  selector: 'app-container',
  imports: [Employee, Rooms],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container {

}
