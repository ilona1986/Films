import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../interfaces/movie.inteeerface";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film: Movie | any;

  constructor() { }

  ngOnInit(): void {
  }

}
