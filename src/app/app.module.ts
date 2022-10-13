import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppMainComponent } from './app-main/app-main.component';
import { SharedModule } from './shared/shared.module';
import { OnboardingScreenComponent } from './onboarding-screen/onboarding-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';
import { MenuDetailComponent } from './shared/components/menu-detail/menu-detail.component';
import { AllMenuScreenComponent } from './landing-screen/components/all-menu-screen/all-menu-screen.component';
import { GalleryScreenComponent } from './landing-screen/components/gallery-screen/gallery-screen.component';
import { CardScreenComponent } from './landing-screen/components/card-screen/card-screen.component';
import { RankingScreenComponent } from './landing-screen/components/ranking-screen/ranking-screen.component';
import { ProfileScreenComponent } from './landing-screen/components/profile-screen/profile-screen.component';
import { MenuViewScreenComponent } from './landing-screen/components/menu-view-screen/menu-view-screen.component';
import { UploadPhotoComponent } from './landing-screen/components/upload-photo/upload-photo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GalleryInfoComponent } from './landing-screen/components/gallery-info/gallery-info.component';
import { ShoppingCartComponent } from './landing-screen/components/shopping-cart/shopping-cart.component';
import { OrderScreenComponent } from './landing-screen/components/order-screen/order-screen.component';
import { VotingScreenComponent } from './landing-screen/components/voting-screen/voting-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AppMainComponent,
    OnboardingScreenComponent,
    LoginScreenComponent,
    MenuDetailComponent,
    AllMenuScreenComponent,
    GalleryScreenComponent,
    CardScreenComponent,
    RankingScreenComponent,
    ProfileScreenComponent,
    MenuItemComponent,
    MenuViewScreenComponent,
    UploadPhotoComponent, 
    GalleryInfoComponent, 
    ShoppingCartComponent, 
    OrderScreenComponent, 
    VotingScreenComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [GalleryInfoComponent]
})
export class AppModule { }
