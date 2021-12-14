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

  parseResponse(res: any) {
    const {data} = res;
    const {movies} = data;
    return movies.map((item: any) => {
      return {
        id: item.idIMDB,
        title: item.title,
        trailer: item.trailer,
        urlPoster: item.urlPoster
      };
    });
  }
}
