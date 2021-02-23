import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Films } from './models/films';
import { FilmService } from './service/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sticky = false;
  subs: Subscription[] = [];
  trending: Films;
  popular: Films;
  topRated: Films;
  originals: Films;
  nowPlaying: Films;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
  };

  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private movie: FilmService) {}

  ngOnInit(): void {
    this.subs.push(
      this.movie.getTrending().subscribe((data) => {
        this.trending = data;
        this.headerBGUrl =
          'https://image.tmdb.org/t/p/original' +
          this.trending.results[0].backdrop_path;
      })
    );
    this.subs.push(
      this.movie.getPopularMovies().subscribe((data) => (this.popular = data))
    );
    this.subs.push(
      this.movie.getTopRated().subscribe((data) => (this.topRated = data))
    );
    this.subs.push(
      this.movie.getOriginals().subscribe((data) => (this.originals = data))
    );
    this.subs.push(
      this.movie.getNowPlaying().subscribe((data) => (this.nowPlaying = data))
    );
  }

  ngOnDestroy(): void {
    this.subs.map((s) => s.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
