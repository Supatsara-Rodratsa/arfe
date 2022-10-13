import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { Menu } from '../all-menu-screen/all-menu.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public listItems: Menu[] = [];
  public items: Map<string, Menu[]> = new Map<string, Menu[]>(); 
  public total: number = 0;
  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.listItems = this.utilitiesService.getCartItem();

    for (let item of this.listItems) {
      if (this.items.has(item.name)) {
        let menu = this.items.get(item.name);
        if (menu) {
          this.items.set(item.name, menu.concat(item));
          this.total += item.price_no;
          console.log(this.total);
          
        } else {
          this.items.delete(item.name);
          this.total -= item.price_no;
        }
      }else {
        this.items.set(item.name, [item]);
        this.total += item.price_no;
        console.log(this.total);
      }
      console.log(this.items);
    }
  }

}
