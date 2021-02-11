import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private theMovieDbService: TheMovieDbService) { }

  ngOnInit(): void {
    this.movies = this.theMovieDbService.getMovies();
  }

}
