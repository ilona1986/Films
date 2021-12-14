import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../interfaces/movie.inteeerface";
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() film!: Movie;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {}

    saveFilm(id: string) {
      this.storageService.saveFilm(id);
    }


}
