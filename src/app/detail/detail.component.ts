import { Component, OnInit } from '@angular/core';
import { ListNotesService } from '../list-notes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  listNotes : Array<any> = []

  constructor(
    public listNotesVar: ListNotesService
  ) { 
    this.listNotes = listNotesVar.getListNotes();
  }

  addFavourite(index: number){
    
  };

  ngOnInit() {
  }

}