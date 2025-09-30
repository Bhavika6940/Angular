import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms implements OnInit {
 hotelName : string= "Hilton Hotel";
  
  ngOnInit() : void{
    console.log('Component initialized!');
  }

}
