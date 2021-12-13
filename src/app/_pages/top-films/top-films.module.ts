import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsComponent } from './top-films/top-films.component';
import {TopFilmsRoutingModule} from "./top-films-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {TopFilmsService} from "./top-films/top-films.service";



@NgModule({
  declarations: [
    TopFilmsComponent
  ],
  imports: [
    CommonModule,
    TopFilmsRoutingModule,
    HttpClientModule
  ],
  providers: [
    TopFilmsService
  ]
})
export class TopFilmsModule { }
