import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcomeMessage: string;
  info: string;

  constructor() { }

  ngOnInit(): void {
    this.welcomeMessage = 'Welcome to our book rental application!';
    this.info = '(Choose one section in the sidebar)';
  }

}
