import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(1000)),
      transition('* => void', animate(0)),
    ],
    ),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
  ]
})

export class LandingScreenComponent implements OnInit {

  public isSelectedMenu: boolean = false;
  public isSelectedGallery: boolean = true;
  public isSelectedCard: boolean = false;
  public isSelectedRanking: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  selectedIcon(event: string) {
    if (event == 'menu') {
      this.isSelectedMenu = true;
      this.isSelectedGallery = false;
      this.isSelectedCard = false;
      this.isSelectedRanking = false;
    } 

    if (event == 'gallery') {
      this.isSelectedMenu = false;
      this.isSelectedGallery = true;
      this.isSelectedCard = false;
      this.isSelectedRanking = false;
    } 

    if (event == 'card') {
      this.isSelectedMenu = false;
      this.isSelectedGallery = false;
      this.isSelectedCard = true;
      this.isSelectedRanking = false;
    } 

    if (event == 'ranking') {
      this.isSelectedMenu = false;
      this.isSelectedGallery = false;
      this.isSelectedCard = false;
      this.isSelectedRanking = true;
    } 
    
    console.log(event);
  }
  

}
