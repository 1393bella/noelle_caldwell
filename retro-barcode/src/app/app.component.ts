import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  colors: string[];
  barcode: string[];

  constructor() {
    this.title = 'Retro Barcode Generator';
    this.colors = ['BlueViolet', 'Crimson', 'DarkCyan', 'Chocolate', 'DarkOrchid', 'DarkMagenta', 'DarkGreen', 'CornflowerBlue', 'DarkSlateBlue', 'DodgerBlue', 'DarkRed', 'HotPink', 'Indigo', 'MediumSeaGreen', 'MediumSpringGreen', 'MidnightBlue', 'OrangeRed'];
    this.barcode = [];
    for (let x = 0; x < 10; x++) {
      this.barcode[x] = this.colors[Math.floor(Math.random()*this.colors.length)];
    }
  }
  
}
