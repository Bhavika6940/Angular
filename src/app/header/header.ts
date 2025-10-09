import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  title: string = 'Title';
  constructor() {}
  ngOnInit(): void {
    
  }
}
