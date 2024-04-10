import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Artist } from 'src/Artist';

@Component({
  selector: 'app-artist-details-component',
  templateUrl: './artist-details-component.page.html',
  styleUrls: ['./artist-details-component.page.scss'],
})
export class ArtistDetailsComponentPage implements OnInit {

  @Input()
  artist!: Artist;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
        
  dismissModal(){
    this.modalCtrl.dismiss();
  }
  

}
