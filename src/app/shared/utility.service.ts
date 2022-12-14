import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../landing-screen/components/all-menu-screen/all-menu.interface';

@Injectable({
  providedIn: 'root'
})

export class UtilitiesService {

    private uploadedImage: FileReader[] = [];
    private selectedMenu: Menu | undefined;
    private selectedCategories: Menu[] = [];
    private selectedCategory: string | undefined;
    private cartItems: Menu[] = [];
    private voting: string = '';

    constructor(
        private router: Router
    ) {}

    selectedIcon(event: string, params?: any) {
      if (event == 'menu') {
        this.selectedCategory = 'Coffee';
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
      
      if (event == 'upload') {
        this.router.navigate(['arfraim'], { queryParams: params }); 
      }

      if (event == 'cart') {
        this.router.navigate(['shoppingCart']); 
      }

      if (event == 'voting') {
        this.router.navigate(['voting']); 
      }
    }

    setImage(pic: FileReader) {
      this.uploadedImage?.push(pic);
    }

    updateImage(pics: FileReader[]) {
      this.uploadedImage = [...pics];
    }

    getImage() {
      return this.uploadedImage;
    }

    setSelectedMenu(item: Menu) {
      this.selectedMenu = item;
    }

    getSelectedMenu() {
      return this.selectedMenu;
    }

    setSelectedCategoriesItems(items: Menu[]) {
      this.selectedCategories = items;
    }

    getSelectedCategoriesItems() {
      return this.selectedCategories;
    }

    setSelectedCategory(item: string) {
      this.selectedCategory = item;
    }

    getSelectedCategory() {
      return this.selectedCategory;
    }

    addCartItem(item: Menu) {
      this.cartItems.push(item);
    }

    getCartItem() {
      return this.cartItems;
    }

    setVotingImage(item: string) {
      this.voting = item;
    }

    getVotingImage() {
      return this.voting;
    }
}
