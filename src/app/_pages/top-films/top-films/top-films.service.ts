import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopFilmsService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get('assets/movies.json');
  }
}
