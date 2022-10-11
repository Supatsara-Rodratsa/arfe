import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UtilitiesService {
    constructor(
        private router: Router
    ) {}

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
