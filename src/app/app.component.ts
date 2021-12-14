import { Component } from '@angular/core';
import {Router} from "@angular/router";

interface NavButtons {
  buttonName: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navButtons: NavButtons [] = [
    {
      buttonName: 'home',
      path: '',
    },
    {
      buttonName: 'saved',
      path: 'saved-films',
    }
  ];

  constructor(private  router: Router) {
  }

    navigate(path: string) {
    this.router.navigate([path]);
  }
}
