import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-screen',
  templateUrl: './onboarding-screen.component.html',
  styleUrls: ['./onboarding-screen.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(1000)),
      transition('* => void', animate(0)),
    ]),
  ]
})
export class OnboardingScreenComponent implements OnInit {

  public count: number = 1;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  slideTabNext() {
    this.count++;
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

}
