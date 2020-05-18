import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: MovieListComponent,
  },
  {
    path: 'movie-details/:imdbID',
    component: MoviesDetailsComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
