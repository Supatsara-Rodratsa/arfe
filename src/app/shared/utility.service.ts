import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UtilitiesService {

    private uploadedImage: FileReader | undefined;

    constructor(
        private router: Router
    ) {}

    selectedIcon(event: string, params?: any) {
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
      
      if (event == 'upload') {
        this.router.navigate(['arfraim'], { queryParams: params }); 
      }
    }

    setImage(pic: FileReader) {
      this.uploadedImage = pic;
    }

    getImage() {
      return this.uploadedImage;
    }
}
