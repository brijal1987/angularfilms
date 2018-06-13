import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WeatherWidgetComponent } from './widgets/weather/weather.component';
import { WeatherSearchComponent } from './widgets/weather-search/weather-search.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchResultsComponent } from './search-results/search-results.component';
// Services
import { WeatherService } from './services/weather.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, },
  {
    path: 'weather/:woeid',
    component: WeatherComponent,
  },
  {
    path: 'search/:keyword',
    component: SearchResultsComponent,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WeatherSearchComponent,
    WeatherComponent,
	WeatherWidgetComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
