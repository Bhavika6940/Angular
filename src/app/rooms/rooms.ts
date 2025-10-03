import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './roomsInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms implements OnInit {
  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {

    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomList: RoomList[] = [];
  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1560448070-c6d6a1f3f2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1560448070-c6d6a1f3f2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 4.5
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1560448070-c6d6a1f3f2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 3.5
      }

    ];
   }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}