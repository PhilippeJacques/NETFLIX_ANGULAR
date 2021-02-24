import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { WatchAnywhereComponent } from './watch-anywhere/watch-anywhere.component';
import { PickPriceComponent } from './pick-price/pick-price.component';
import { CancelTimeComponent } from './cancel-time/cancel-time.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieComponent,
    TvShowComponent,
    GetStartedComponent,
    WatchAnywhereComponent,
    PickPriceComponent,
    CancelTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
