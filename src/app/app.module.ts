import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavtopComponent } from './components/navtop/navtop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ServiceComponent } from './components/service/service.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    NavBarComponent,
    HeroComponent,
    AboutComponent,
    SwiperComponent,
    ServiceComponent,
    TestimonialsComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
