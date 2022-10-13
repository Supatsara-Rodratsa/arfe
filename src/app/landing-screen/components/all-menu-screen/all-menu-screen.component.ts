import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { breakfast, coldDrink, hotCoffee, hotDrink, iceCoffee, Menu, sweetCorner } from './all-menu.interface';

@Component({
  selector: 'app-all-menu-screen',
  templateUrl: './all-menu-screen.component.html',
  styleUrls: ['./all-menu-screen.component.css']
})
export class AllMenuScreenComponent implements OnInit {

  public coffeeHashMap: Map<string, Menu[]> = new Map<string, Menu[]>(); 
  public drinkHashMap: Map<string, Menu[]> = new Map<string, Menu[]>(); 
  public snackHashMap: Map<string, Menu[]> = new Map<string, Menu[]>(); 
  public isSelectedCoffee: boolean = false;
  public isSelectedDrink: boolean = false;
  public isSelectedSnack: boolean = false;
  private allCoffee: Menu[] = [];
  private allDrinks: Menu[] = [];
  private allSnacks: Menu[] = [];
  public color: string = '';

  constructor(
    public utilitiesService: UtilitiesService,
    private router: Router
  ) { }


  ngOnInit(): void {
    let selectedCategory = this.utilitiesService.getSelectedCategory();
    if (selectedCategory == 'Snacks') {
      this.color = '#75D6D8';
      this.isSelectedSnack = true;
    }
    else if (selectedCategory == 'Drinks') {
      this.color = '#FF8A9D';
      this.isSelectedDrink = true;
    }
    else {
      this.color = '#CC8AFF';
      this.isSelectedCoffee = true;
    }

    this.coffeeHashMap.set('ICED COFFEE', iceCoffee);
    this.coffeeHashMap.set('HOT COFFEE', hotCoffee);
    this.allCoffee = [...hotCoffee.concat(iceCoffee)];

    this.drinkHashMap.set('COLD DRINKS', coldDrink);
    this.drinkHashMap.set('HOT DRINKS', hotDrink);
    this.allDrinks = [...coldDrink.concat(hotDrink)];

    this.snackHashMap.set('SWEET CORNER', sweetCorner);
    this.snackHashMap.set('BREAKFAST', breakfast);
    this.allSnacks = [...sweetCorner.concat(breakfast)];
  }

  selectedCategories(items: string) {
    if (items == 'Coffee') {
      this.isSelectedCoffee = true;
      this.isSelectedDrink = false;
      this.isSelectedSnack = false;
      this.color = '#CC8AFF';
    }

    if (items == 'Drinks') {
      this.isSelectedCoffee = false;
      this.isSelectedDrink = true;
      this.isSelectedSnack = false;
      this.color = '#FF8A9D';
    }

    if (items == 'Snacks') {
      this.isSelectedCoffee = false;
      this.isSelectedDrink = false;
      this.isSelectedSnack = true;
      this.color = '#75D6D8';
    }
  }

  selectedMenu(item: Menu) {
    if (this.isSelectedCoffee) {
      this.utilitiesService.setSelectedCategoriesItems(this.allCoffee);
      this.utilitiesService.setSelectedCategory('Coffee');
    } else if (this.isSelectedDrink) {
      this.utilitiesService.setSelectedCategoriesItems(this.allDrinks);
      this.utilitiesService.setSelectedCategory('Drinks');
    } else {
      this.utilitiesService.setSelectedCategoriesItems(this.allSnacks);
      this.utilitiesService.setSelectedCategory('Snacks');
    }
    this.utilitiesService.setSelectedMenu(item);
    this.router.navigate(
      ['/selectedMenu']
    );    
  }

  getCurrentCartItem() {
    return this.utilitiesService.getCartItem().length;
  }

  goToShoppingCart() {
    this.utilitiesService.selectedIcon('cart');
  }
}
