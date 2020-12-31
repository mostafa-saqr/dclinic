import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CartComponent } from './components/cart/cart.component';
import { PriceTableComponent } from './components/price-table/price-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricingComponent,
    CartComponent,
    PriceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
