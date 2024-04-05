import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayFeaturedArtistsPageRoutingModule } from './display-featured-artists-routing.module';

import { DisplayFeaturedArtistsPage } from './display-featured-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayFeaturedArtistsPageRoutingModule
  ],
  declarations: [DisplayFeaturedArtistsPage]
})
export class DisplayFeaturedArtistsPageModule {}
