import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-screen',
  templateUrl: './card-screen.component.html',
  styleUrls: ['./card-screen.component.css']
})
export class CardScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  selectedIcon(event: string) {
    if (event == 'menu') {
      this.router.navigate(['menu']);
    } 

    if (event == 'gallery') {
      this.router.navigate(['gallery']);
    } 

    if (event == 'card') {
      this.router.navigate(['card']);
    } 

    if (event == 'ranking') {
      this.router.navigate(['ranking']);
    } 
  }

}
