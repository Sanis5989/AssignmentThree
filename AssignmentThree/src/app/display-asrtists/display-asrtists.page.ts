import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/Artist';
import { DataService } from 'src/dataService';
import { ModalController } from '@ionic/angular';
import { ArtistDetailsComponentPage } from '../artist-details-component/artist-details-component.page';

@Component({
  selector: 'app-display-asrtists',
  templateUrl: './display-asrtists.page.html',
  styleUrls: ['./display-asrtists.page.scss'],
})
export class DisplayAsrtistsPage implements OnInit {
  artists: Artist[] = [];
  filteredArtists: Artist[] = [];
  searchTerm: string = '';

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

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
          this.filterArtists();
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

  filterArtists(): void {
    // Check if the search term is empty or contains only whitespace
    if (!this.searchTerm.trim()) {
      // If no search term provided, show all artists
      this.filteredArtists = this.artists;
    } else {
      // If there is a search term, filter artists based on the search term
      this.filteredArtists = this.artists.filter((artist) =>
        // Convert artist name and search term to lowercase for case-insensitive search
        artist.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  //create a modal popup when the button is clicked.
  //check the artist Id and find the specific artist based on Id and create the modal with artist object.
  async presentArtistDetails(artistId: number) {
    const artist = this.artists.find((artist) => artist.artist_id === artistId);
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

    console.log(this.artists);
  }
}
