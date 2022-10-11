import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { Menu } from '../all-menu-screen/all-menu.interface';

@Component({
  selector: 'app-menu-view-screen',
  templateUrl: './menu-view-screen.component.html',
  styleUrls: ['./menu-view-screen.component.css']
})
export class MenuViewScreenComponent implements OnInit {

  @Input() selectedMenu: Menu | undefined;
  
  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
  }

}
