import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/landing-screen/components/all-menu-screen/all-menu.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() selectedMenu: Menu | undefined;
  @Input() currentItem: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
