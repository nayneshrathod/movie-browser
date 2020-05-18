import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute) { }
  movie: any[];
  title = 'Movies';

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      qparams => {
        const q = qparams.q;
        this.service.searchMovies(q)
        .subscribe(resp => this.movie = resp.Search);
      }
    );

  }

}
