import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListNotesService } from './list-notes.service';

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent, HelloComponent, DetailComponent],
  bootstrap: [AppComponent],
  providers: [ListNotesService]
})
export class AppModule {}
