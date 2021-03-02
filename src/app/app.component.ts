import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ListNotesService } from './list-notes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(
    private router: Router,
    public listNotesVar: ListNotesService
  ){}

  judul: String;
  isi: String;
  tanggal: String;

  navigateFav(){
    this.router.navigate(["/favourite"]);
  }

  addNotes(){
    this.listNotesVar.addListNotes(this.judul, this.isi, this.tanggal);
    this.router.navigate(["/detail"]);
  }
}
