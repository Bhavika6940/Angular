import { ViewChild, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, ChangeDetectorRef, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { Room, RoomList } from './roomsInterface';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from '../room-list-component/room-list-component';
import { Header } from '../header/header';


@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomListComponent, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rooms implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {

    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomList: RoomList[] = [];
  constructor(private cdr: ChangeDetectorRef) { }

  roomSelected!: RoomList;
  @ViewChild(Header, { static: true }) header !: Header
  @ViewChildren(Header) headers !: QueryList<Header>
  title: string = "Rooms List"
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
  ngAfterViewInit() {
    console.log('Header title before:', this.header.title);
    this.header.title = "Hotel Header"; // update
    console.log(this.headers);

    // this.headers.forEach((header, index)=>{
    //   header.title = `Header Title ${index+1}`;
    // })
    this.headers.last.title = "Last Header";
    this.headers.first.title = "First Header";
    this.headers.get(1)!.title = "Second Header";
    this.cdr.detectChanges(); // ✅ refresh view manually
  }
  ngAfterViewChecked() {
    console.log("After view checked is called");
  }
  selectRoom(room: RoomList) {
    // console.log('Selected room:', room);
    // this.roomSelected = room;
    this.header.title = "Hotel Header";
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 9000,
      photos: 'https://images.unsplash.com/photo-1560448070-c6d6a1f3f2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5
    };
    // this.roomList.push(room);

    this.roomList = [...this.roomList, room]
  }
}
