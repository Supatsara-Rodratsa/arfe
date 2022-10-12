import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/landing-screen/components/all-menu-screen/all-menu.interface';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  @Input() menu: Menu | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
