import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListNotesService } from './list-notes.service';
import { FavouriteComponent } from './favourite/favourite.component';

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent},
  { path: "favourite", component: FavouriteComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent, HelloComponent, DetailComponent, FavouriteComponent],
  bootstrap: [AppComponent],
  providers: [ListNotesService]
})
export class AppModule {}
