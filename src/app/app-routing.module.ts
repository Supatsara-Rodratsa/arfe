import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { AllMenuScreenComponent } from './landing-screen/components/all-menu-screen/all-menu-screen.component';
import { CardScreenComponent } from './landing-screen/components/card-screen/card-screen.component';
import { GalleryScreenComponent } from './landing-screen/components/gallery-screen/gallery-screen.component';
import { ProfileScreenComponent } from './landing-screen/components/profile-screen/profile-screen.component';
import { RankingScreenComponent } from './landing-screen/components/ranking-screen/ranking-screen.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  { 
    path: '',
    component: AppMainComponent
  },
  { 
    path: 'login', 
    component: LoginScreenComponent 
  },
  { 
    path: 'main-menu', 
    component: LandingScreenComponent 
  },
  { 
    path: 'gallery', 
    component: GalleryScreenComponent 
  },
  {
    path: 'menu',
    component: AllMenuScreenComponent
  },
  {
    path: 'card',
    component: CardScreenComponent
  },
  {
    path: 'ranking',
    component: RankingScreenComponent
  },
  {
    path: 'profile',
    component: ProfileScreenComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
