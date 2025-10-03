import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Room, RoomList } from './roomsInterface';
import { CommonModule } from '@angular/common';
import {RoomListComponent} from '../room-list-component/room-list-component';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomListComponent],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class Rooms implements OnInit ,DoCheck{
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

  roomSelected! : RoomList;

  title: string= "Rooms List"
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

   ngDoCheck(): void {
     console.log("On changes is called");
   }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = this.title.toUpperCase();
  }


  selectRoom(room: RoomList) {
    // console.log('Selected room:', room);
    this.roomSelected = room;
  }
  addRoom(){
    const room: RoomList = {
      roomNumber:4,
      roomType: 'Deluxe Room',
      amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 9000,
        photos: 'https://images.unsplash.com/photo-1560448070-c6d6a1f3f2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating: 4.5
      };
      // this.roomList.push(room);

      this.roomList= [...this.roomList,room]
    }
  }
