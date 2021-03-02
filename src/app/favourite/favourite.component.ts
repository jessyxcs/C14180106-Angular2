import { Component, OnInit } from '@angular/core';
import { ListNotesService } from '../list-notes.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  listFav: Array<any> = [];

  constructor(
    public listFavouriteVar: ListNotesService
  ) { 
    this.listFav = listFavouriteVar.getFavNotes();
  }

  ngOnInit() {
  }

}