import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() name: string = '';
  @Input() quantity: string = '';
  @Input() ingredient: string = '';
  @Input() price: string = '';

  ngOnInit(): void {
  }

}
