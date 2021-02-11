import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {

  constructor() { }

  getMovies(): Movie[] {
      return [
        {
          adult: false,
          backdrop_path: "/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
          genre_ids: [
            28,
            80,
            53
          ],
          id: 587996,
          original_language: "es",
          original_title: "Bajocero",
          overview: "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
          popularity: 2213.744,
          poster_path: "/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg",
          release_date: "2021-01-29",
          title: "Below Zero",
          video: false,
          vote_average: 6.5,
          vote_count: 244
        },
        {
          adult: false,
          backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
          genre_ids: [
            14,
            28,
            12
          ],
          id: 464052,
          original_language: "en",
          original_title: "Wonder Woman 1984",
          overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
          popularity: 2273.724,
          poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
          release_date: "2020-12-16",
          title: "Wonder Woman 1984",
          video: false,
          vote_average: 7,
          vote_count: 3457
        }
      ];
  }

  getMovieDetails(id: string): Movie {
    return {
      adult: false,
      backdrop_path: "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
      belongs_to_collection: null,
      budget: 63000000,
      genres: [
        {
          id: 18,
          name: "Drama"
        },
        {
          id: 18,
          name: "Drama"
        }
      ],
      homepage: "http://www.foxmovies.com/movies/fight-club",
      id: 550,
      imdb_id: "tt0137523",
      original_language: "en",
      original_title: "Fight Club",
      overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      popularity: 43.132,
      poster_path: "/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
      production_companies: [
        {
          id: 508,
          logo_path: "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
          name: "Regency Enterprises",
          origin_country: "US"
        },
        {
          id: 711,
          logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
          name: "Fox 2000 Pictures",
          origin_country: "US"
        },
        {
          id: 20555,
          logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
          name: "Taurus Film",
          origin_country: "DE"
        },
        {
          id: 54051,
          logo_path: null,
          name: "Atman Entertainment",
          origin_country: ""
        },
        {
          id: 54052,
          logo_path: null,
          name: "Knickerbocker Films",
          origin_country: "US"
        },
        {
          id: 25,
          logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
          name: "20th Century Fox",
          origin_country: "US"
        },
        {
          id: 4700,
          logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
          name: "The Linson Company",
          origin_country: "US"
        }
      ],
      production_countries: [
        {
          iso_3166_1: "DE",
          name: "Germany"
        },
        {
          iso_3166_1: "US",
          name: "United States of America"
        }
      ],
      release_date: "1999-10-15",
      revenue: 100853753,
      runtime: 139,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English"
        }
      ],
      status: "Released",
      tagline: "Mischief. Mayhem. Soap.",
      title: "Fight Club",
      video: false,
      vote_average: 8.4,
      vote_count: 21059
    }
  }
}
