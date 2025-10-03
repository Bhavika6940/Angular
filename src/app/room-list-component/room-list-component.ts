import { Component , Input, OnInit,Output,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { RoomList } from '../rooms/roomsInterface';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-room-list-component',
  imports: [CommonModule],
  templateUrl: './room-list-component.html',
  styleUrl: './room-list-component.scss'
})
export class RoomListComponent implements OnInit,OnChanges{
  @Input() rooms : RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  @Input() title: string = "";
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  constructor() {}
  ngOnInit() : void {}

  roomSelection(room: RoomList){
    this.selectedRoom.emit(room);
  }

}
