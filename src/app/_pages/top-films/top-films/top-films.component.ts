import { Component, OnInit } from '@angular/core';
import {TopFilmsService} from "./top-films.service";

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.css']
})
export class TopFilmsComponent implements OnInit {

  constructor(private  topFilmsService: TopFilmsService) { }

  ngOnInit(): void {
    this.topFilmsService.getFilms().subscribe((data) => {
      console.log(data);
    });
  }

}
