import { Component } from '@angular/core';
import { DataService } from 'src/dataService';
import { Artist } from 'src/Artist';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private dataService: DataService) {}

  //creating an empty array of artists
  allArtists: Artist[] = [];

  //function to get all the artists from api
  getAllArtists() {
    this.dataService.getAllArtists().subscribe(
      (get: any) => {
        this.allArtists = get;
      },
      (err: any) => {
        alert('err');
        console.log(err.message);
      }
    );
  }
}
