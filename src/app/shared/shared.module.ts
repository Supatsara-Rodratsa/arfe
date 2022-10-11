import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    WelcomeHeaderComponent,
    ToggleComponent, 
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
  ],
  entryComponents: [],
})
export class SharedModule {
	static forRoot(): any[] {
		return [SharedModule];
	}
}
