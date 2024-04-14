import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/Artist';
import { DataService } from 'src/dataService';
import { ModalController } from '@ionic/angular';
import { ArtistDetailsComponentPage } from '../artist-details-component/artist-details-component.page';

@Component({
  selector: 'app-home',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  artists: Artist[] = [];
  searchTerm: string = '';

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  searchArtist(name: string) {
    this.dataService.searchArtist(name).subscribe(
      (d: any) => {
        this.artists = [];
        this.artists = d;
        console.log(d);
      },
      (err: any) => {
        console.log(err);
      }
    );
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
