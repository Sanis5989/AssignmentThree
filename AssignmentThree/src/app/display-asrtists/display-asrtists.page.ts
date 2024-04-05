import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/Artist';
import { DataService } from 'src/dataService';

@Component({
  selector: 'app-display-asrtists',
  templateUrl: './display-asrtists.page.html',
  styleUrls: ['./display-asrtists.page.scss'],
})
export class DisplayAsrtistsPage implements OnInit {
  artists: Artist[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadArtists();
  }
//function to get artists from api and assign it to the empty artists array.
  loadArtists(): void {
    this.dataService.getAllArtists().subscribe(
      (response: any) => {
        // Check if the response is an array
        if (Array.isArray(response)) {
          // If it is, assign it to artists
          this.artists = response;
        } else {
          // If not, log an error
          console.error('Unexpected response:', response);
        }
      },
      (error) => {
        console.log('Error fetching artists:', error);
      }
    );
  }
}

