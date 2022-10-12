import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { Menu } from '../all-menu-screen/all-menu.interface';

@Component({
  selector: 'app-menu-view-screen',
  templateUrl: './menu-view-screen.component.html',
  styleUrls: ['./menu-view-screen.component.css']
})
export class MenuViewScreenComponent implements OnInit {
  
  public selectedMenu: Menu | undefined;
  
  constructor(
    public utilitiesService: UtilitiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedMenu = params as unknown as Menu;
    });
    console.log(this.selectedMenu);
  }

}
