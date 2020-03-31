import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';
import { SocialLinksComponent } from './frontpage/social-links/social-links.component';
import { UserComponent } from './frontpage/user/user.component';
import { RegistrationComponent } from './registration/registration.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { ProductsComponent } from './products/products.component';
// import { HomeComponent } from './home/home.component';
// import { CartComponent } from './cart/cart.component';
// import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    SocialLinksComponent,
    UserComponent,
    RegistrationComponent,
    // ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
   {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
