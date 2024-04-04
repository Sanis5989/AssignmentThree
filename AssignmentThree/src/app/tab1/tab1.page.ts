import { Component } from '@angular/core';
import { Artist } from 'src/Artist';

import { DataService } from 'src/dataService';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private dataService: DataService) {}
  //creating an empty array of artists
  allArtists: Artist[] = [];

  //function to get all the artists from api
  async getAllArtists() {
    await this.dataService.getAllArtists().subscribe(
      (get: any) => {
        this.allArtists = get;
        console.log(this.allArtists);
      },
      (err: any) => {
        alert('err');
        console.log(err.message);
      }
    );
  }

  printArtists() {
    this.getAllArtists();
  }
}
