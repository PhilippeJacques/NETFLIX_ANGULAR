import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie!: Movie;

  constructor(
    private route: ActivatedRoute, 
    private theMovieDbService: TheMovieDbService
  ) { }

  ngOnInit(): void {
    this.getMovieDetails()
  }

  private getMovieDetails() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.movie = this.theMovieDbService.getMovieDetails(id);
    }
  }
}
