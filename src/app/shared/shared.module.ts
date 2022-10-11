import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    WelcomeHeaderComponent,
    ToggleComponent, 
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    NavBarModule
  ],
  exports: [
    NavBarComponent,
    NavBarModule,
    WelcomeHeaderComponent,
    ToggleComponent,
    MenuItemComponent
  ],
  entryComponents: [],
})
export class SharedModule {
	static forRoot(): any[] {
		return [SharedModule];
	}
}
