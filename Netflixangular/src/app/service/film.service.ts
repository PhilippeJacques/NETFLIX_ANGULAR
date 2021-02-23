import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Films } from '../models/films';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv',
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private URL = 'https://api.themoviedb.org/3';

  private api_key = environment.api;

  constructor(private http: HttpClient) {}
  getLatestMovie(): Observable<Films> {
    return this.http.get<Films>(`${this.URL}${endpoint.latest}`, {
      params: {
        api_key: this.api_key,
      },
    });
  }

  getNowPlaying(): Observable<Films> {
    return this.http.get<Films>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key,
      },
    });
  }

  getOriginals(): Observable<Films> {
    return this.http.get<Films>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key,
      },
    });
  }

  getPopularMovies(): Observable<Films> {
    return this.http.get<Films>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key,
      },
    });
  }

  getTopRated(): Observable<Films> {
    return this.http.get<Films>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key,
      },
    });
  }

  getTrending(): Observable<Films> {
    return this.http.get<Films>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key,
      },
    });
  }
}
