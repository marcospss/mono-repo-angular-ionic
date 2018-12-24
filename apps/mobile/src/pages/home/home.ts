import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  moviesRoot:string = 'MoviesPage'
  seriesRoot:string = 'TvShowsPage'
  searchRoot:string = 'SearchPage'


  constructor(
      public navCtrl: NavController
    ) {}

}
