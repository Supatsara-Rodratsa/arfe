import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() set mainColor(color: any) {
    this.color = color;
  }
  @Input() background = null;

  public color: any | undefined
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  navigateToProfile() {
    this.router.navigate(['profile']);
  }

  navigateToGallery() {
    this.router.navigate(['gallery']);
  }

}
