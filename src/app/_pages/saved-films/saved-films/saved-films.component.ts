import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../interfaces/movie.inteeerface";
import {TopFilmsService} from "../../top-films/top-films/top-films.service";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'app-saved-films',
  templateUrl: './saved-films.component.html',
  styleUrls: ['./saved-films.component.css']
})
export class SavedFilmsComponent implements OnInit {
  savedFilmsList!: Movie [];

  constructor(
    private topFilmsService: TopFilmsService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.topFilmsService.getFilms().subscribe((res) => {
      const savedFilms = this.storageService.getSavedFilms();
      this.savedFilmsList = this.topFilmsService.parseResponse(res).filter((item: any) => savedFilms.includes(item.id));
    });
  }

}
