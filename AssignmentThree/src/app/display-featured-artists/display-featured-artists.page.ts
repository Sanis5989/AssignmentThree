import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/dataService';
import { Artist } from 'src/Artist';

@Component({
  selector: 'app-display-featured-artists',
  templateUrl: './display-featured-artists.page.html',
  styleUrls: ['./display-featured-artists.page.scss'],
})
export class DisplayFeaturedArtistsPage implements OnInit {

  featuredArtists: Artist[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
//function to get artists from api and assign it to the empty artists array.
loadFeaturedArtists(): void {
  this.dataService.getAllArtists().subscribe(
    (response: any) => {
      // Check if the response is an array
      if (Array.isArray(response)) {
        // If it is, assign it to artists
        let isFeaturedArtists = response.filter(artist => artist.is_featured_artist === 1);
        this.featuredArtists = isFeaturedArtists;
      } else {
        // If not, log an error
        console.error('Unexpected error:', response);
      }
    },
    (error) => {
      console.log('Error fetching featured artists:', error);
    }
  );
}
}
