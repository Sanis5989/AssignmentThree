import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/dataService';
import { Artist } from 'src/Artist';
import { ModalController } from '@ionic/angular';
import { ArtistDetailsComponentPage } from '../artist-details-component/artist-details-component.page';

@Component({
  selector: 'app-display-featured-artists',
  templateUrl: './display-featured-artists.page.html',
  styleUrls: ['./display-featured-artists.page.scss'],
})
export class DisplayFeaturedArtistsPage implements OnInit {
  featuredArtists: Artist[] = [];
  filteredArtists: Artist[] = [];
  searchTerm: string = '';
  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadFeaturedArtists();
  }
  //function to get artists from api and assign it to the empty artists array.
  loadFeaturedArtists(): void {
    this.dataService.getAllArtists().subscribe(
      (response: any) => {
        // Check if the response is an array
        if (Array.isArray(response)) {
          // If it is, assign it to artists
          let isFeaturedArtists = response.filter(
            (artist) => artist.is_featured_artist === 1
          );
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

  filterArtists(): void {
    // Check if the search term is empty or contains only whitespace
    if (!this.searchTerm.trim()) {
      // If no search term provided, show all featured artists
      this.filteredArtists = this.featuredArtists;
    } else {
      // If search term is provided, filter the featuredArtists array
      this.filteredArtists = this.featuredArtists.filter((artist) =>
        // Filter artists whose name includes the search term (case insensitive)
        artist.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  //create a modal popup when the button is clicked.
  //check the artist Id and find the specific artist based on Id and create the modal with artist object.
  async presentArtistDetails(artistId: number) {
    const artist = this.featuredArtists.find(
      (artist) => artist.artist_id === artistId
    );
    if (artist) {
      const modal = await this.modalCtrl.create({
        component: ArtistDetailsComponentPage,
        componentProps: {
          artist: artist,
        },
      });
      return await modal.present();
    } else {
      console.error('Artist not found:', artistId); // Handle case where artist is missing
    }
  }
}
