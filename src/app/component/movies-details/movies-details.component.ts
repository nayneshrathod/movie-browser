import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie: any;

  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      qparams => {
        const id = qparams.imdbID;
        this.service.getMoviesDetails(id)
          .subscribe(resp => this.movie = resp);
      }
    );
  }

  goBack() {
    window.history.back();
  }
}
