import { Injectable } from '@angular/core';

@Injectable()
export class ListNotesService {

  // private listNotes : Array<{judulGlob: String, isiGlob: String, tanggalGlob: String}>;

  private listNotes : Array<any> = [];
  private favNotes : Array<any> = [];
  constructor() { }

  public getListNotes(){
    return this.listNotes;
  }

  public addListNotes(judul: String, isi: String, tanggal: String){
    this.listNotes.push(
      {judulGlob: judul, isiGlob: isi, tanggalGlob: tanggal}
    );
  }

  public getFavNotes(){
    return this.favNotes;
  }

  public addFavNotes(index: number){
    this.favNotes.push(this.listNotes[index]);
  }

}