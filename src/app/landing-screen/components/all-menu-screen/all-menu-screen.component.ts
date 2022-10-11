import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public isSelectedCoffee: boolean = true;
  public isSelectedDrink: boolean = false;
  public isSelectedSnack: boolean = false;
  public color: string = '#CC8AFF';

  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {
    this.coffeeHashMap.set('ICED COFFEE', iceCoffee);
    this.coffeeHashMap.set('HOT COFFEE', hotCoffee);

    this.drinkHashMap.set('COLD DRINKS', coldDrink);
    this.drinkHashMap.set('HOT DRINKS', hotDrink);

    this.snackHashMap.set('SWEET CORNER', sweetCorner);
    this.snackHashMap.set('BREAKFAST', breakfast);
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

  selectedIcon(event: string) {
    if (event == 'menu') {
      this.router.navigate(['menu']);
    } 

    if (event == 'gallery') {
      this.router.navigate(['gallery']);
    } 

    if (event == 'card') {
      this.router.navigate(['card']);
    } 

    if (event == 'ranking') {
      this.router.navigate(['ranking']);
    } 
  }

}
