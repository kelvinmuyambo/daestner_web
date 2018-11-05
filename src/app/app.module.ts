import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ProductsComponent } from './components/products/products.component';
import { CommunityComponent } from './components/community/community.component';
import { AboutComponent } from './components/about/about.component';
import { DataProvider } from './providers/data-provider';
import { ServiceDetailsComponent } from './components/services/service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    IndustriesComponent,
    ProductsComponent,
    CommunityComponent,
    AboutComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'solutions', component: ServicesComponent, children: [{
          path: 'details', component: ServiceDetailsComponent
        }]
      },
      { path: 'industries', component: IndustriesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'community', component: CommunityComponent },
      { path: '*', component: HomeComponent }
    ])
  ],
  providers: [DataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
