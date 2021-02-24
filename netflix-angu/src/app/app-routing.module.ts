import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelTimeComponent } from './cancel-time/cancel-time.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { PickPriceComponent } from './pick-price/pick-price.component';
import { WatchAnywhereComponent } from './watch-anywhere/watch-anywhere.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: HomeComponent},
  {path: 'get-started', component: GetStartedComponent},
  {path: 'movies/:id', component: MovieComponent},
  {path: 'tv-shows/:id', component: TvShowComponent},
  {path: 'watch-anywhere', component: WatchAnywhereComponent},
  {path: 'pick-price', component: PickPriceComponent},
  {path: 'cancel-time', component: CancelTimeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
