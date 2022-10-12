import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() mainColor = "yellow";
  @Input() background = null;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  navigateToProfile() {
    this.router.navigate(['profile']);
  }

}
