import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent
  ],
  entryComponents: [], 
  providers: [],
})
export class NavBarModule { }
