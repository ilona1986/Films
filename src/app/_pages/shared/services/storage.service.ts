import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveFilm(id:string) {
    let savedFilms = this.getSavedFilms();

    localStorage.setItem('savedFilms', JSON.stringify(savedFilms.concat(id)));
  }

  getSavedFilms() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('savedFilms')) || [];
  }
}
