import { Component, OnInit } from '@angular/core';
import {TopFilmsService} from "./top-films.service";
import {Movie} from "../../../interfaces/movie.inteeerface";

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.css']
})
export class TopFilmsComponent implements OnInit {
  moviesList: Movie [] | any;


  constructor(private  topFilmsService: TopFilmsService) { }

  ngOnInit(): void {
    this.topFilmsService.getFilms().subscribe((res) => {
      this.moviesList = this.topFilmsService.parseResponse(res);
    });
  }

}
