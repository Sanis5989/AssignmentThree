import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistDetailsComponentPageRoutingModule } from './artist-details-component-routing.module';

import { ArtistDetailsComponentPage } from './artist-details-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistDetailsComponentPageRoutingModule
  ],
  declarations: [ArtistDetailsComponentPage]
})
export class ArtistDetailsComponentPageModule {}
