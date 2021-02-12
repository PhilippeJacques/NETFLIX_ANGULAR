import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/models/credits.model';
import { TvShow } from 'src/app/models/tv-show.model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvShow!: TvShow;
  credits!: Credits;

  constructor(
    private route: ActivatedRoute, 
    private theMovieDbService: TheMovieDbService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.theMovieDbService.getTvShow(id).subscribe(tvShow => this.tvShow = tvShow);
      this.theMovieDbService.getTvShowCredits(id).subscribe(credits => this.credits = credits);
    }
  }

}
