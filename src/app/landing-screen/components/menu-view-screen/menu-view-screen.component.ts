import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { Menu } from '../all-menu-screen/all-menu.interface';

@Component({
  selector: 'app-menu-view-screen',
  templateUrl: './menu-view-screen.component.html',
  styleUrls: ['./menu-view-screen.component.css']
})
export class MenuViewScreenComponent implements OnInit {
  
  public selectedMenu: Menu | undefined;
  public allItems: Menu[] = [];
  public currentIndex = 0;
  
  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.selectedMenu = this.utilitiesService.getSelectedMenu();
    if (this.selectedMenu) {
      this.allItems = this.utilitiesService.getSelectedCategoriesItems();
      this.currentIndex = this.allItems.find(val => val.index == this.selectedMenu?.index)?.index || 0;
    } else {
      this.utilitiesService.selectedIcon('menu')
    }
    
  }

  getCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  getAllList() {
    return this.allItems;
  }

  getCurrentCartItem() {
    return this.utilitiesService.getCartItem().length;
  }

  goToShoppingCart() {
    this.utilitiesService.selectedIcon('cart');
  }

}
