import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedFilmsComponent } from './saved-films/saved-films.component';
import {SharedModule} from "../shared/shared.module";
import {SavedFilmsRoutingModule} from "./saved-films-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {TopFilmsService} from "../top-films/top-films/top-films.service";
import {StorageService} from "../shared/services/storage.service";



@NgModule({
  declarations: [
    SavedFilmsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    SavedFilmsRoutingModule
  ],
  providers: [
    TopFilmsService,
    StorageService
  ]
})
export class SavedFilmsModule { }
